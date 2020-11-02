$(function () {
    var bfList = {
        initms: 0,
        $uli: [],
        second: 30,
        code: '',
        pause: false,
        listKeys: '',
        cacheKeys: '',
        load: function (onceFlag) {
            var url = getUrl('list', 'data');

            $.ajax({
                url: url,
                timeout: 5000,
                success: function (data) {
                    bfList.code = data.code;

                    if (typeof data['second'] != 'undefined') {
                        bfList.second = parseInt(data.second);

                        //console.log(data.second)
                    }

                    bfList.listKeys = ''; //每次更新

                    if (data.list.length > 0) {
                        bfList.show(data.list);
                    }
                },
                complete: function () {
                    bfList.start(onceFlag);
                },
                'dataType': 'json'
            });
        },
        show: function (arr) {
            for (var i in arr) {
                var bifen = arr[i];
                var id = bifen['id']; //string
                var $li = $('#saishi' + id);

                this.listKeys += ',' + id;

                if (isNotCbaBasketball($li.html(), bifen['type'])) {
                    $li.find('span').eq(0).html(bifen['visit_score'] + ' - ' + bifen['home_score']);
                } else {
                    $li.find('span').eq(0).html(bifen['home_score'] + ' - ' + bifen['visit_score']);
                }
            }
        },
        getcode: function (onceFlag) {
            if (this.pause === true) {
                this.start();
                return;
            }

            var url = url = getUrl('list', 'code');

            $.ajax({
                url: url,
                timeout: 5000,
                success: function (data) {
                    if (data.code != bfList.code) {
                        bfList.load(onceFlag);
                    } else {
                        bfList.start(onceFlag);
                    }
                },
                error: function () {
                    bfList.start(onceFlag);
                },
                dataType: 'json'
            });
        },
        start: function (onceFlag) {
            if (typeof onceFlag === 'string') {
                this.updateHistory();

                return;
            }

            console.log(this.pause);

            setTimeout(function () {
                bfList.getcode();
            }, bfList.second * 1000);
        },
        loadOne: function (id, sdate) {
            var url = getUrl('detail', 'data', id, sdate);

            $.ajax({
                url: url,
                timeout: 5000,
                success: function (data) {
                    var $li = $('#saishi' + id);

                    if (isNotCbaBasketball($li.html(), data['type'])) {
                        $li.find('span').eq(0).html(data['visit_score'] + ' - ' + data['home_score']);
                    } else {
                        $li.find('span').eq(0).html(data['home_score'] + ' - ' + data['visit_score']);
                    }

                    bfList.cacheKeys += ',' + id;
                },
                error: function () {

                },
                dataType: 'json'
            });
        },
        updateHistory: function (upnow) {
            if ((new Date().getTime() - this.initms) > 60 * 1000 || (typeof upnow === 'string')) { //生效时间
                console.log('li - upup');

                this.$uli.each(function () {
                    var id = $(this).attr('id').replace('saishi', '');
                    var stime = $(this).data('time');

                    if (stime.localeCompare(curTime()) > 0) {
                        return false;
                    } else {
                        if (bfList.listKeys.indexOf(id) > -1) {
                            return false;
                        }

                        if (bfList.cacheKeys.indexOf(id) === -1) {
                            bfList.loadOne(id, stime.substring(0, 10));
                        }
                    }
                });
            }
        },
        init: function () {
            this.timer();
            this.getcode();

            this.initms = new Date().getTime();
            this.$uli = $('.content li');

            setTimeout(function () {
                bfList.updateHistory('now');
            }, 1000);
        },
        tramp: 0,
        timer: function () {
            if (navigator.userAgent.indexOf('Trident') > 0) {
                $(window).blur(function () {
                    bfList.pause = true;
                    //document.title = 'stop'
                });

                $(window).focus(function () {
                    if (bfList.pause === true) {
                        bfList.pause = false;
                        bfList.getcode('once');
                    }

                    //document.title = 'get'
                });

                //console.log('ie');
            } else {
                setInterval(function () {
                    var i = (new Date()).getTime();

                    //console.log(i - bfList.tramp);

                    if (bfList.tramp != 0 && i > (bfList.tramp + 800)) {
                        bfList.pause = true;
                    } else {
                        if (bfList.pause === true) {
                            bfList.pause = false;
                            bfList.getcode('once');
                        }
                    }

                    bfList.tramp = i;
                }, 300);

                //console.log('no-ie');
            }
        }
    };

    bfList.init();
    //////
    $('.content li span').css('font-weight', 'bold');

    var bfData = [];

    $('.content li').on('mouseleave', function () {
        $('.bf-box').hide();
    });

    $('.bf-box').on('mouseenter', function () {
        $(this).hide();
    });

    $('window').on('scroll', function () {
        $('.bf-box').hide();
    });

    $('.content li span').on('mouseenter', function () {
        var $li = $(this).parents('li');
        var id = $li.attr('id').replace('saishi', ''); //string
        var netFlag = false;
        var sdate = '', matchTime = $li.data('time');

        if (matchTime.localeCompare(curTime()) > 0) {
            return;
        }

        if (typeof bfData[id] == 'undefined') {
            sdate = matchTime.substr(0, 10);

            bfData[id] = {
                id: id,
                sdate: sdate,
                ms: 0,
                code: '',
                data: [],
                hid: '',
                vid: '',
                fdata: [],
                cache: ''
            };

            netFlag = true;
        } else {
            if ((new Date()).getTime() > bfData[id]['ms'] + 2000) {
                netFlag = true;
                sdate = bfData[id]['sdate'];
            }
        }

        if (netFlag) {
            codeBifen(id, sdate);
        } else {
            defaultView(id);
        }
    }).on('mouseleave', function () {
        $('.bf-box').hide();
    });

    //code
    function codeBifen(id, sdate) {
        bfData[id]['ms'] = (new Date()).getTime();

        var url = getUrl('detail', 'code', id, sdate);

        $.ajax({
            url: url,
            timeout: 5000,
            success: function (data) {
                if (data.code != bfData[id]['code']) {
                    loadBifen(id, sdate)
                } else {
                    defaultView(id);
                }
                bfData[id]['code'] = data.code;
            },
            error: function () { },
            dataType: 'json'
        });
    }

    //加载比分
    function loadBifen(id, sdate) {
        var url = getUrl('detail', 'data', id, sdate);
        $.ajax({
            url: url,
            timeout: 5000,
            success: function (data) {
                bfData[id]['data'] = data;
                showBifen(id, data);

                var $li = $('#saishi' + id);

                if (isNotCbaBasketball($li.html(), data['type'])) {
                    $li.find('span').eq(0).html(data['visit_score'] + ' - ' + data['home_score']);
                } else {
                    $li.find('span').eq(0).html(data['home_score'] + ' - ' + data['visit_score']);
                }
            },
            error: function () { },
            dataType: 'json'
        });
    }
    //
    function showBifen(id, data) {
        if (data.type == 'football') {
            getZuqiuTeamId(id, data);
            setNoDataView(id, 'zuqiu');
        } else {
            var url = getUrl('nba_score', '', id, data.sdate);

            $.ajax({
                url: url,
                timeout: 5000,
                success: function (indata) {
                    if (typeof indata.data.host.on == 'object') {
                        var s1 = nbaScoreRank(indata.data.host.on);
                        var s2 = nbaScoreRank(indata.data.guest.on);

                        setView(id, 'nba', data['period_cn'], [s1, s2]);
                    }
                },
                error: function () {
                    setNoDataView(id, 'nba');
                },
                dataType: 'json'
            });
        }
    }

    //
    function nbaScoreRank(arr) {
        var score = 0, playerScore = 0, str = '<p>暂无</p>';

        for (var i in arr) {
            playerScore = parseInt(arr[i]['points']);

            if (playerScore > score) {
                str = '<p>' + arr[i]['player_name_cn'] + ' ' + playerScore + '分</p>';
                score = playerScore;
            }
        }
        return str;
    }

    //
    function showZuqiuBifen(id, data) {
        var url = getUrl('zuqiu', 'event', id, data.sdate);

        $.ajax({
            url: url,
            timeout: 5000,
            success: function (evdata) {
                bfData[id]['fdata'] = evdata;
                var cn = '', type = 0, str1 = '', str2 = '', n1 = 0, n2 = 0, li, span = '';
                for (var i in evdata.data) {
                    li = evdata.data[i];
                    cn = li['event_code_cn'];
                    if (cn == '乌龙') {
                        cn = '乌龙球';
                    }
                    if (cn == '两黄牌下') {
                        cn = '黄牌2';
                    }
                    if (cn == '第二张黄牌') {
                        cn = '黄牌2';
                    }
                    if (li['sl_team_id'] != bfData[id]['vid'] && li['sl_team_id'] != bfData[id]['hid']) {
                        continue;
                    }

                    if (cn == '进球' || cn == '点球' || cn == '乌龙球' || cn == '红牌' || cn == '黄牌2') {
                        type = 'home';

                        if (cn != '乌龙球' && li['sl_team_id'] == bfData[id]['vid']) {
                            type = 'visit';
                        }

                        if (cn == '乌龙球' && li['sl_team_id'] != bfData[id]['vid']) {
                            type = 'visit';
                        }

                        // if(li['sl_team_id'] == bfData[id]['vid']){
                        // 	type =  'visit';
                        // }

                        span = '<span></span>';

                        if (cn == '红牌') {
                            span = '<span class="red"></span>';
                        }

                        if (cn == '乌龙球') {
                            span = '<span class="wulong"></span>';
                        }

                        if (cn == '黄牌2') {
                            span = '<span class="huang2"></span>';
                        }

                        if (type == 'home') {
                            str1 += '<p title="' + li['Info'] + '">' + li['time'] + '\'' + span + li['player_name_cn'] + '</p>';
                            n1++;
                        } else {
                            str2 += '<p title="' + li['Info'] + '">' + li['player_name_cn'] + span + li['time'] + '\'' + '</p>';
                            n2++;
                        }
                    }
                }

                if (n1 == 0) {
                    str1 = '<p>无数据</p>';
                    n1 = 1;
                }

                if (n2 == 0) {
                    str2 = '<p>无数据</p>';
                    n2 = 1;
                }

                if (n1 != n2 && (n1 > 2 || n2 > 2)) {
                    if (n1 > n2) {
                        str2 += repeatStr(n1 - n2);
                    } else {
                        str1 += repeatStr(n2 - n1);
                    }
                }

                setView(id, 'zuqiu', data['period_cn'], [str1, str2]);
            },
            error: function () {
                setNoDataView(id, 'zuqiu');
            },
            dataType: 'json'
        });
    }

    //
    function repeatStr(n) {
        var str = '';
        for (var i = 1; i <= n; i++) {
            str += '<p>&nbsp;</p>';
        }

        return str;
    }

    //
    function getZuqiuTeamId(id, data) {
        if (bfData[id]['vid'] == '') {
            var url = getUrl('zuqiu', 'speed', id, data.sdate);

            $.ajax({
                url: url,
                timeout: 5000,
                success: function (hsdata) {
                    bfData[id]['hid'] = hsdata.data.Team1Id;
                    bfData[id]['vid'] = hsdata.data.Team2Id;

                    if (data['home_team'] === hsdata.data.Team2 || data['visit_team'] === hsdata.data.Team1) {
                        bfData[id]['hid'] = hsdata.data.Team2Id;
                        bfData[id]['vid'] = hsdata.data.Team1Id;
                    }
                    ;

                    showZuqiuBifen(id, data);
                },
                error: function () {
                    setNoDataView(id, 'zuqiu');
                },
                dataType: 'json'
            });
        } else {
            showZuqiuBifen(id, data);
        }
    }

    //
    function defaultView(id) {
        if (typeof bfData[id]['cache'] == 'object') {
            setView(id, bfData[id]['cache']['type'], bfData[id]['cache']['pcn'], bfData[id]['cache']['con']);
        }
    }

    //设置提示内容
    function setView(id, type, period_cn, con) {
        bfData[id]['cache'] = {type: type, pcn: period_cn, con: con};

        var bclass = '.bf-nba', bleft = 0;

        $('.bf-period').html(period_cn.replace('\n', '<br>').replace(' ', '<br>'));

        $li = $('#saishi' + id);

        bleft = parseInt($li.find('span').first().offset().left);

        //$('.bf-nba').hide();
        $('.bf-zuqiu1').show();
        $('.bf-zuqiu2').show();


        $('.bf-zuqiu1').html(con[0]);
        $('.bf-zuqiu2').html(con[1]);
        // if(isNotCbaBasketball($li.html(),type)){
        //     $('.bf-zuqiu1').html(con[1]);
        //     $('.bf-zuqiu2').html(con[0]);
        // }else{
        //     $('.bf-zuqiu1').html(con[0]);
        //     $('.bf-zuqiu2').html(con[1]);
        // }


        bclass = '.bf-zuqiu1';

        $('.bf-triangle').css('left', '160px');
        bleft -= 150;

        if (type == 'nba') {
            bleft += 5;
            $('.bf-content p').css({'height': '50px', 'line-height': '50px'});
        }

        $('.bf-box').show().offset({top: $li.offset().top + 39, left: Math.max(0, bleft)});
        $('.bf-period').css('margin-top', parseInt(($(bclass).height() - $('.bf-period').height()) / 2) + 'px');
    }

    function setNoDataView(id, type) {
        var period_cn = '进行中';

        if (bfData[id] && bfData[id].data && bfData[id].data.period_cn) {
            period_cn = bfData[id].data.period_cn;
        }

        setView(id, type, period_cn, ['<p>无数据</p>', '<p>无数据</p>']);
    }

    //
    function getUrl(type, lc, id, sdate) {
        var url = '', server = '4pc';

        if (type == 'list') {
            if (lc == 'data') {
                url = '//bifen4pc.qiumibao.com/json/list.htm';
            } else {
                url = '//bifen' + server + '.qiumibao.com/json/list_code.htm';
            }
        }

        if (type == 'detail') {
            if (lc == 'data') {
                url = '//bifen' + server + '.qiumibao.com/json/' + sdate + '/' + id + '.htm';
            } else {
                url = '//bifen' + server + '.qiumibao.com/json/' + sdate + '/' + id + '_code.htm';
            }
        }

        if (type == 'zuqiu') {
            if (lc == 'event') {
                url = '//dc4pc.qiumibao.com/dc/matchs/data/' + sdate + '/match_event_' + id + '.htm';
            } else {
                url = '//dc4pc.qiumibao.com/dc/matchs/data/' + sdate + '/match_high_speed_' + id + '.htm';
            }
        }

        if (type == 'nba_score') {
            url = '//dc4pc.qiumibao.com/dc/matchs/data/' + sdate + '/player_' + id + '.htm';
        }

        return url + '?' + (Math.random() + '').substr(2, 5);
    }

    //判断是否是非cba篮球赛
    function isNotCbaBasketball(title, type) {
        if ((type == 'basketball' || type == 'nba') && title && title.indexOf('CBA') < 0 && title.indexOf('cba') < 0) {
            return true;
        } else {
            return false;
        }
    }

    //时间
    function curTime() {
        var today = new Date();
        var y = today.getFullYear();
        var m = checkTime(today.getMonth() + 1);
        var d = checkTime(today.getDate());
        var h = checkTime(today.getHours());
        var n = checkTime(today.getMinutes());
        var s = checkTime(today.getSeconds());

        return y + '-' + m + '-' + d + ' ' + h + ':' + n + ':' + s;
    }

    //
    function checkTime(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
});