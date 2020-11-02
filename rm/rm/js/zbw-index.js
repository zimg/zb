
/** Created by zhaoyuanming on 15/9/2. */
$(function () {
//  $(".schedule_container .box .titlebar:first").append(""+
//      "<div class='c_cat'>"+
//      "选择分类：<!--<span class='all' value='全部赛事'>全部赛事-输入关键字</span>--><input type='text' class='c_result' style='width:140px; height:18px; padding:1px; border:solid 1px #ccc; background:url(/css/images/more.png) center right no-repeat;' value='全部赛事-输入关键字'/>"+
//
//      "<div class='c_wrap'>"+
//      "<div class='c_btm'><span class='c_all' value='全部赛事' style='font-weight: 900;'>全部赛事</span> <span value='CCTV5直播'>CCTV5</span><font class='c_cls'>关闭筛选框</font></div>"+
//      "<div class='list'>"+
//
//      "<div class='items c_first'><span class='i_first' value='足球,中超,英超,西甲,德甲,意甲,法甲,俄超'>足球</span><span value='亚洲杯'>亚洲杯</span><span value='中超,足协'>中超</span><span value='英超,足总杯,联赛杯,社区盾'>英超</span><span value='西甲,国王杯,西班牙超级杯'>西甲</span><span value='意甲,意大利杯,意大利超级杯'>意甲</span><span value='德甲,德国杯,德国超级杯'>德甲</span><span value='欧冠,欧洲冠军'>欧冠</span><span value='皇马,皇家马德里'>皇马</span><span value='巴萨,巴塞罗那'>巴萨</span><span value='曼联,曼彻斯特联'>曼联</span><span value='曼城,曼彻斯特城'>曼城</span><span value='阿森纳'>阿森纳</span><span value='切尔西'>切尔西</span><span value='利物浦'>利物浦</span><span value='AC米兰'>AC米兰</span><span value='国际米兰,国米'>国际米兰</span><span value='尤文'>尤文图斯</span><span value='拜仁'>拜仁</span><span value='恒大'>恒大</span><span value='中国男足,国足'>中国男足</span><span value='亚冠,亚洲冠军'>亚冠</span><span value='法甲,法国杯'>法甲</span><span value='欧联杯,欧罗巴'>欧联杯</span><span value='中甲'>中甲</span></div>"+
//      "<div class='items c_second'><span class='i_first' value='NBA,CBA,篮,lanqiubifen,ncaa,sbl'>篮球</span><span value='NBA'>NBA</span><span value='CBA'>CBA</span><span value='勇士'>勇士</span><span value='骑士'>骑士</span><span value='湖人'>湖人</span><span value='热火'>热火</span><span value='火箭'>火箭</span><span value='雷霆'>雷霆</span><span value='公牛'>公牛</span><span value='凯尔特人'>凯尔特人</span><span value='尼克斯'>尼克斯</span><span value='快船'>快船</span><span value='小牛'>小牛</span><span value='马刺'>马刺</span><span value='篮网,网队'>篮网</span><span value='森林狼'>森林狼</span><span value='灰熊'>灰熊</span><span value='掘金'>掘金</span><span value='爵士'>爵士</span><span value='开拓者'>开拓者</span><span value='步行者'>步行者</span><span value='老鹰'>老鹰</span><span value='雄鹿'>雄鹿</span><span value='广东'>广东</span><span value='美国男篮'>美国男篮</span><span value='中国男篮'>中国男篮</span></div>"+
//      "<div class='items c_third'><span class='i_first'>其他</span><span value='F1'>F1</span><span value='网球,澳网,温网,法网,美网,ATP,WTA'>网球</span><span value='斯诺克,台球,桌球'>斯诺克</span><span value='NFL'>NFL</span><span value='MLB'>MLB</span><span value='NHL'>NHL</span><span value='拳'>拳击</span><span value='UFC'>UFC</span><span value='高尔夫'>高尔夫</span><span value='田径,田联'>田径</span><span value='排球,男排,女排'>排球</span><span value='羽,苏迪曼杯,尤伯杯'>羽毛球</span><span value='乒'>乒乓球</span></div>"+
//      "</div>"+
//
//      "</div>"+
//      "</div>");
//<a href='javascript:;'><span style='background-position:-136px -8px;'></span>民间</a><a href='http://www.wanjiashe.com/' target='_blank' style='border-right:1px solid #ccc;'><span style='background-position:-164px -8px;'></span>游戏</a>
    $(".schedule_container .box .titlebar:first").append("" +
        "<div class='c_cat'>" +
        "<div class='c_nav'><a class='current' href='javascript:;'><span style='background-position:-11px -8px;'></span>全部</a><a href='javascript:;'><span style='background-position:-36px -8px;'></span>重要</a><a href='javascript:;'><span style='background-position:-198px -8px;'></span>完赛</a><a href='javascript:;'><span style='background-position:-61px -8px;'></span>足球</a><a href='javascript:;'><span style='background-position:-86px -8px;'></span>篮球</a><a href='javascript:;'><span style='background-position:-165px -8px'></span>电竞</a><a class='c_shaixuan' href='javascript:;'><span style='background-position:-111px -8px;'></span>筛选</a></div>" +
        //			"<ul class='c_nav'><li><span>全部</a></li><li><span>重要</span></li><li><span>篮球</span></li><li><span>足球</span></li><li><span>筛选</span></li></ul>"+
        //			"<div class='c_switch' style='display:block;'>"+
        //				"<div class='c_font'>点击可切换列表</div>"+
        //			"</div>"+

        "<div class='c_wrap'>" +
        "<div class='c_btm'><span class='c_all' value='全部赛事' style='font-weight: 900;'>全部赛事</span> <span value='CCTV5直播'>CCTV5</span><font class='c_cls'>关闭筛选框</font></div>" +
        "<div class='list'>" +

        "<div class='items c_first'><span class='i_first' value='足球,中超,英超,西甲,德甲,意甲,法甲,俄超'>足球</span><span value='世界杯'>世界杯</span><span value='亚洲杯'>亚洲杯</span><span value='中超,足协'>中超</span><span value='英超,足总杯,联赛杯,社区盾'>英超</span><span value='西甲,国王杯,西班牙超级杯'>西甲</span><span value='意甲,意大利杯,意大利超级杯'>意甲</span><span value='德甲,德国杯,德国超级杯'>德甲</span><span value='欧冠,欧洲冠军'>欧冠</span><span value='皇马,皇家马德里'>皇马</span><span value='巴萨,巴塞罗那'>巴萨</span><span value='曼联,曼彻斯特联'>曼联</span><span value='曼城,曼彻斯特城'>曼城</span><span value='阿森纳'>阿森纳</span><span value='切尔西'>切尔西</span><span value='利物浦'>利物浦</span><span value='AC米兰'>AC米兰</span><span value='国际米兰,国米'>国际米兰</span><span value='尤文'>尤文图斯</span><span value='拜仁'>拜仁</span><span value='恒大'>恒大</span><span value='中国男足,国足'>中国男足</span><span value='亚冠,亚洲冠军'>亚冠</span><span value='法甲,法国杯'>法甲</span><span value='欧联杯,欧罗巴'>欧联杯</span><span value='中甲'>中甲</span></div>" +
        "<div class='items c_second'><span class='i_first' value='NBA,CBA,篮,lanqiubifen,ncaa,sbl'>篮球</span><span value='NBA'>NBA</span><span value='CBA'>CBA</span><span value='勇士'>勇士</span><span value='骑士'>骑士</span><span value='湖人'>湖人</span><span value='热火'>热火</span><span value='火箭'>火箭</span><span value='雷霆'>雷霆</span><span value='公牛'>公牛</span><span value='凯尔特人'>凯尔特人</span><span value='尼克斯'>尼克斯</span><span value='快船'>快船</span><span value='小牛'>小牛</span><span value='马刺'>马刺</span><span value='篮网,网队'>篮网</span><span value='森林狼'>森林狼</span><span value='灰熊'>灰熊</span><span value='掘金'>掘金</span><span value='爵士'>爵士</span><span value='开拓者'>开拓者</span><span value='步行者'>步行者</span><span value='老鹰'>老鹰</span><span value='雄鹿'>雄鹿</span><span value='广东'>广东</span><span value='美国男篮'>美国男篮</span><span value='中国男篮'>中国男篮</span></div>" +
        "<div class='items c_third'><span class='i_first'>其他</span><span value='F1'>F1</span><span value='网球,澳网,温网,法网,美网,ATP,WTA'>网球</span><span value='斯诺克,台球,桌球'>斯诺克</span><span value='NFL'>NFL</span><span value='MLB'>MLB</span><span value='NHL'>NHL</span><span value='拳'>拳击</span><span value='UFC'>UFC</span><span value='高尔夫'>高尔夫</span><span value='田径,田联'>田径</span><span value='排球,男排,女排'>排球</span><span value='羽,苏迪曼杯,尤伯杯'>羽毛球</span><span value='乒'>乒乓球</span><span value='游戏'>电竞</span></div>" +
        "</div>" +

        "</div>" +
        "</div>");

    //切换列表提示信息是否显示
//	if(!(cookie("sel_num")==='')){
//		$(".c_switch").css("display","none");
//	}

    // 根据当前选择的过滤条件，刷新后过滤条件不变
    if (cookie("sel_num") != "") {
        var num = cookie("sel_num");
        $aset = $(".c_cat a");
        $aset.removeClass("current");
        $aset.eq(num).addClass("current");

        if ($aset.eq(num).text() === '全部') {
            dochoose('全部赛事');
        } else if ($aset.eq(num).text() === '民间' || $aset.eq(num).text() === '电竞') {

        } else {
            dochoose($aset.eq(num).text());
        }
    }
    $(".c_cat .c_wrap").hide();

    $(".c_cls").click(function (event) {
        $(".c_cat .c_wrap").hide();
    });

    $(".c_result").click(function (e) {
        $(".c_cat .c_wrap").show();
        $(document).one("click", function (event) {
            $(".c_cat .c_wrap").hide();
            console.log("click_hide");
        });
        e.stopPropagation();
    });
    $(".c_shaixuan").click(function (e) {
        $(".c_cat .c_wrap").show();
        $(document).one("click", function (event) {
            $(".c_cat .c_wrap").hide();
//          console.log("click_hide");
        });
        e.stopPropagation();
    });
//	$(".c_switch").click(function(){
//		$(".c_switch").css("display","none");
//		addCookie("sel_num",0,30*24*60*60);
//	});
    var game_isFirst = 0;
    $(".c_cat a").click(function () {
        if ($(this).attr("class") == "current") {
            return;
        }
//		if($(".c_switch").css("display")=="block"){
//			$(".c_switch").css("display","none");
//			addCookie("sel_num",$(this).index(),30*24*60*60);
//		}
        $(".c_cat a").removeClass("current");
        var tab_txt = $(this).text();
        if (tab_txt === '筛选') {
            $(this).parent().find("a").eq(0).addClass("current");
        } else {
            $(this).addClass("current");
        }
        var num;
        if (tab_txt === '全部' || tab_txt === '筛选') {
            dochoose('全部赛事');
            num = 0;
        } else if (tab_txt === '民间' || tab_txt === '电竞') {
            dochoose("electric_contest");
            num = 1;//$(this).index();
            if (!game_isFirst++) {
                getGameList();
            }
        } else if (tab_txt == '完赛') {
            dochoose(tab_txt);
            num = 1;
            var d_str = dateFormate();
            load_end_list(d_str);
        } else {
            dochoose(tab_txt);
            num = $(this).index();
        }

        addCookie("sel_num", num, 30 * 24 * 60 * 60);
    });

    $(document).on("click", ".c_cat .c_wrap span", function () {
        if ($(this).html() == 'CCTV5') {
            $(".c_result").val($(this).html());
            $(".c_cat .c_wrap").hide();
            dochooseKey($(this).html());
            return;
        }
        var value = typeof ($(this).attr("value")) == 'undefined' ? $(this).html() : $(this).attr("value");
        dochoose(value);
        $(".c_result").val($(this).html());
        $(".c_cat .c_wrap").hide();
    });

    //获得焦点
    $(".c_result").focus(function (e) {
        $(this).val("");
        $(".c_cat").css("z-index", '9');
    });
    //输入框失去焦点触发
    $(".c_result").blur(function (e) {
        var result = $(this).val();
        if (result == "") {
            result = "全部赛事";
            $(this).val("全部赛事-输入关键字");
        }
        var flage = false;
        $('.c_cat span').each(function (index) {
            if (result == $(this).html()) {
                dochoose($(this).attr("value"));
                flage = true;
            }
        });
        if (!flage) {
            dochoose(result);
            $(".c_cat .c_wrap").hide();
        }
    });

    //输入框按回车
    $(".c_result").keydown(function (e) {
        if (e.keyCode == 13) {
            var result = $(this).val();
            var flage = false;
            $('.c_cat span').each(function (index) {
                if (result == $(this).html()) {
                    dochoose($(this).attr("value"));
                    flage = true;
                }
            });
            if (!flage) {
                dochoose(result);
                $(".c_cat .c_wrap").hide();
            }
        }
    });
});

function getGameList() {
    $.getJSON('//api.qiumibao.com/application/saishi/index.php?_url=/game&callback=?', function (res) {
//		console.log(res);
        if (res.status == "success") {
            var data = res.data;
            var lists = data.list;
            var $titlebar = $(".titlebar");
            lists.forEach(function (_list, i) {
                var formatDate = _list['formatDate'];
                $titlebar.each(function (i, item) {
                    var tlt = $(item).find("h2").attr("title");
                    if (tlt === formatDate) {
                        var list = _list['list'];
                        var li_str = '';
                        var $content = $(item).next(".content");
//                      
//                      var old_html = $content.html();
                        list.forEach(function (li, j) {
//                          if(old_html.indexOf(li['id'] + '.htm') === -1){
                            var home_logo = li['home_logo'] ? '<img src="//duihui.qiumibao.com/game/' + li['home_logo'] + '.png" />' : '';
                            var visit_logo = li['visit_logo'] ? '<img src="//duihui.qiumibao.com/game/' + li['visit_logo'] + '.png" />' : '';
                            if (li['show_order'] % 10 == 2) {
                                li_str += '<li label="electric_contest" id="saishi' + li['id'] + '" data-time="' + li['createtime'].substr(0, 16) + '"><b>' + li['time'] + ' ' + li['title'] + ' ' + li['home_team'] + ' ' + home_logo + ' <span> - </span> ' + visit_logo + ' ' + li['visit_team'] + '</b><a href=' + li['url'] + '"/" target="_blank">' + (li['keywords'] || '等待更新') + '</a></li>';
                            } else if (li['show_order'] % 10 == 1) {
                                li_str += '<li label="electric_contest" id="saishi' + li['id'] + '" data-time="' + li['createtime'].substr(0, 16) + '"><b>' + li['time'] + ' ' + li['title'] + '</b> ' + li['home_team'] + ' ' + home_logo + ' <span> - </span> ' + visit_logo + ' ' + li['visit_team'] + ' <a href=' + li['url'] + '"/" target="_blank">' + (li['keywords'] || '等待更新') + '</a></li>';
                            } else {
                                li_str += '<li label="electric_contest" id="saishi' + li['id'] + '" data-time="' + li['createtime'].substr(0, 16) + '">' + li['time'] + ' ' + li['title'] + ' ' + li['home_team'] + ' <span> - </span>  ' + li['visit_team'] + ' <a href=' + li['url'] + '"/" target="_blank">' + (li['keywords'] || '等待更新') + '</a></li>';
                            }


//                          }
                        });
                        $content.find("ul").append(li_str);
                    }
                });
            });
        }
    });
}

//加载15天完赛数据
var load_day = 0, cur_str = '', loading = false;

function load_end_list(d_str) {
    getEndList(d_str, function (data_str, d_str, next_str) {
        cur_str = d_str;
        var $end_list = $(".schedule_container .end-list");
        $end_list.append(data_str);
        get_end_score(d_str);
        if (load_day < 15) {
            load_end_list(next_str);
        }
    });
}

$(window).on("scroll", function () {
    $(".c_cat a").each(function () {
        if ($(this).hasClass("current") && $(this).text() == "完赛") {
            if ($(document).height() - $(window).height() - $(window).scrollTop() < 100 && !loading) {
                loading = true;
                var d_str = dateYestarday(cur_str);
                getEndList(d_str, function (data_str, d_str, next_str) {
                    cur_str = d_str;
                    $(".schedule_container .end-list").append(data_str);
                    get_end_score(d_str);
                    loading = false;
                });
            }
        }
    });
});

//完赛请求接口
function getEndList(d_str, cb) {
    $.ajax({
        type: "get",
        url: "//s.qiumibao.com/json/record/" + d_str + ".htm",
        dataType: "json",
        success: function (res) {
            var data = res;
            if (!data) {
                d_str = dateYestarday(d_str);
                getEndList(d_str, cb);
                return;
            }
            data = lists_filter(data);
            var str = model_list(data);
            load_day++;
            var next_str = dateYestarday(d_str);
            cb(str, d_str, next_str);
        },
        error: function (res) {
            d_str = dateYestarday(d_str);
            getEndList(d_str, cb);
        }
    });
}

//加载每天的完赛数据后加载比分
function get_end_score(d_str) {
    $.getJSON("//bifen.qiumibao.com/json/" + d_str + "/list.htm", function (res) {
        if (!res || res && !res.list) return;
        var lists = res.list;
        lists.forEach(function (li, i, arr) {
            var $id = $("#end" + li['id']);
            if ($id.length > 0) {
                var left_team_name = $id.attr("left-team");
                if (li['home_team'] == left_team_name) {
                    $id.html(li['home_score'] + ' - ' + li['visit_score']);
                } else {
                    $id.html(li['visit_score'] + ' - ' + li['home_score']);
                }
            }
            var $zhibo_id = $("#zhibo" + li['id']);
            if ($zhibo_id.length > 0) {
                if (li['url']) {
                    $zhibo_id.attr("href", '//www.zhibo8.cc' + li['url']);
                }
            }
        });
    });
}

function judeg_gallery(date) {
    var $gallery = $("#gallery" + date);
    if (!$gallery) return;
    $gallery.find(".gallery").each(function (i, item) {
        var saishi_id = $(item).attr("gallery-id");
        $.ajax({
            type: "get",
            url: "//news.zhibo8.cc/gallery/" + date + "/" + saishi_id + ".htm",
            complete: function (res) {
                if (saishi_id == '126991')
                    console.log(res);
            }
        });
    });
}

function dateFormate(d, separator) {
    separator = separator || '-';
    d = d || new Date();
    var year = d.getFullYear(),
        month = d.getMonth() + 1,
        day = d.getDate();
    return year + separator + formatNumber(month) + separator + formatNumber(day);
}

function formatNumber(n) {
    return n >= 10 ? n : '0' + n;
}

function dateYestarday(date, separator) {
    if (!date) {
        return dateFormate(new Date(), separator)
    } else {
        return dateFormate(new Date(new Date(date.replace(/-/g, "/")).getTime() - 24 * 60 * 60 * 1000), separator);
    }
}

function date_time(time) {
    var d = new Date(time * 1000);
    return formatNumber(d.getHours()) + ':' + formatNumber(d.getMinutes());
}

function lists_filter(data) {
    data.list.forEach(function (li, i, arr) {
        var type = {'basketball': 'nba', 'football': 'zuqiu'}[li['type']];
        if (type == 'nba' || type == 'zuqiu') {
            if (li['left_team']['logo']) {
                li['left_team']['logo_url'] = '<img src="//duihui.qiumibao.com/' + type + '/' + li['left_team']['logo'] + '.png"/>';
            } else {
                li['left_team']['logo_url'] = '<img src="//duihui.qiumibao.com/zuqiu/qita' + (li['left_team']['identity'] == 'visit' ? 'kedui' : 'zhudui') + '.png" />';
            }
            if (li['right_team']['logo']) {
                li['right_team']['logo_url'] = '<img src="//duihui.qiumibao.com/' + type + '/' + li['right_team']['logo'] + '.png" />';
            } else {
                li['right_team']['logo_url'] = '<img src="//duihui.qiumibao.com/zuqiu/qita' + (li['right_team']['identity'] == 'visit' ? 'kedui' : 'zhudui') + '.png" />';
            }
        } else {
            li['left_team']['logo_url'] = '';
            li['right_team']['logo_url'] = '';
        }
        li['showTitle'] = li['title'] && li['title'] != '-' ? li['title'] : li['league']['name_cn'];
        li['j_z_l'] = '';
        if (li['jijin_url']) {
            li['j_z_l'] += '<a href="//www.zhibo8.cc' + li['jijin_url'] + '" target="_blank"> 集锦 </a>';
        }
        if (li['luxiang_url']) {
            li['j_z_l'] += '<a href="//www.zhibo8.cc' + li['luxiang_url'] + '" target="_blank"> 录像 </a>';
        }
        if (li['news_url']) {
            li['j_z_l'] += '<a href="//news.zhibo8.cc' + li['news_url'] + '" target="_blank"> 战报 </a>';
        }
        li['saishi_id_attr'] = li['saishi_id'] != '0' ? 'id="end' + li['saishi_id'] + '"' : '';
        li['zhibo_url'] = li['saishi_id'] != '0' ? ' <a href="//www.zhibo8.cc' + li['url'] + '" target="_blank" id="zhibo' + li['saishi_id'] + '">文字</a>' : '';
        //li['gallery_url']=li['saishi_id']!='0'?'<a href="javascript:;" target="_blank" class="gallery" gallery-id="'+li['saishi_id']+'"></a>':'';
    });
    return data;
}

function model_list(data) {
    var str = '<div class="box">' +
        '<div class="titlebar">' +
        '<h2 title="' + data['date'] + '">' + data['date_str'] + '</h2>' +
        '</div>' +
        '<div class="content"><ul id="gallery' + data.date + '">';
    data.list.forEach(function (li, i, arr) {
        str += '<li label="' + li['label'] + '">' +
            (li['saishi_id'] != 0 ? date_time(li['start_time']) : '') + ' ' + li['showTitle'] + ' ' + li['left_team']['name'] + ' ' + li['left_team']['logo_url'] + ' <span ' + li['saishi_id_attr'] + ' left-team="' + li['left_team']['name'] + '"> - </span> ' + li['right_team']['logo_url'] + ' ' + li['right_team']['name'] + ' </b>' +
            li['j_z_l'] + li['zhibo_url'] +
            '</li>';
    });
    str += '</ul></div>';
    return str;
}


function dochoose(value) {
    $('.schedule_container > .box .content li').each(function (index) {
        /**
         * 完赛与其他切换的处理*/
        var $schedule_container = $(".schedule_container");
        if (value == '完赛') {
            $schedule_container.children().not(":first-child").hide();
            $schedule_container.find(".box:eq(0)").find(".content").hide();
            if ($schedule_container.find(".end-list").length == 0) {
                $('<div class="end-list" style="margin-top:-41px;min-height:41px;"></div>').appendTo(".schedule_container");
            } else {
                $schedule_container.find(".end-list").show();
            }
        } else {
            $schedule_container.children().show();
            $schedule_container.find(".box:eq(0)").find(".content").show();
            $schedule_container.find(".end-list").hide();


            if (value.indexOf("全部赛事") > -1) {
                //去掉label为游戏的
                // if($(this).attr("label").indexOf("游戏")==-1){
                // 	$(this).css("display","list-item");
                // }else{
                // 	$(this).css("display","none");
                // }
                if ($(this).attr("label").indexOf("electric_contest") > -1) {
                    $(this).css("display", "none");
                } else {
                    $(this).css("display", "list-item");
                }

                return;
            }
            if (value.indexOf("重要") > -1 && $(this).find("b").length > 0) {
                $(this).css("display", "list-item");
                return;
            }
            var flage = false;
            var vs = value.split(",");
            for (i = 0; i < vs.length; i++) {
                if ($(this).html().indexOf('暂无比赛') >= 0) continue;
                if ($(this).attr("label").toLowerCase().indexOf(vs[i].toLowerCase()) < 0) {

                } else {
                    flage = true;
                }
            }
            if (!flage) {
                $(this).css("display", "none");
            } else {
                $(this).css("display", "list-item");
            }
        }
    });
}

function dochooseKey(value) {
    $('.schedule_container .box .content li').each(function (index) {
        var flage = false;
        //console.log($(this).children("a:first").html())
        if ($(this).children("a:first").html().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            flage = true;
        }
        if (!flage) {
            $(this).css("display", "none");
        } else {
            $(this).css("display", "list-item");
        }
    });
}


$(function () {
    //提醒 -start
    //$(".schedule_container li").each(function(index, element) {
    //    var u = navigator.userAgent;
    //    if(u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1){
    //        return;
    //    }
    //    $(this).hover(function(e) {
    //        var date = $(this).parent().parent().prev().children("h2").attr("title");
    //
    //        var str = $(this).html();
    //        str = str.toLowerCase();
    //        str = str.split("<a")[0];
    //        time = str.split(" ")[0];
    //        title = str.replace(time,"");
    //        title = title.replace(/<[^>]+>/g,"");
    //        title = "【"+title+"】即将开始，请到 热门直播网 www.zhibo8.cc 观看赛事直播。"
    //        //$(this).append(date);
    //        var isIE=!!window.ActiveXObject;
    //        var isIE6=isIE&&!window.XMLHttpRequest;
    //        if(isIE6){
    //            $(this).append(' <a class="qqtx"  style="position: absolute;z-index:9; display:inline-block !important; heigth:20px;line-height:25px;" href="http://qzs.qq.com/snsapp/app/bee/widget/open.htm?content='+encodeURIComponent(title)+'&time='+encodeURIComponent(date+" "+time)+'&advance=5" target="_blank" title="添加提醒后，开赛前5分钟，QQ会发送消息提醒您">QQ提醒</a>');
    //        }else{
    //            $(this).append('<a class="qqtx"  style="position: absolute;z-index:9; display:inline-block !important; heigth:20px;line-height:25px;" href="http://qzs.qq.com/snsapp/app/bee/widget/open.htm?content='+encodeURIComponent(title)+'&time='+encodeURIComponent(date+" "+time)+'&advance=5" target="_blank" title="添加提醒后，开赛前5分钟，QQ会发送消息提醒您"><img style="display:inline !important;vertical-align:middle; height: 16px;" src="http://i.gtimg.cn/snsapp/app/bee/widget/img/icon3.png"/></a>');
    //        }
    //    },function(e) {
    //        $(this).children(".qqtx").remove();
    //    });
    //});
    //提醒 -end

    //首页右侧下方广告位 下拉固定-start
    $(function () {
        $(window).scroll(function () {
            var scrollTop = window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;

            var offset = $(".bbs_container .advert:last").offset();

            if (scrollTop > offset.top) {
                $(".bbs_container .advert:last iframe").css({
                    'position': 'fixed',
                    'top': '0px',
                    'left': offset.left + 'px',
                    'margin-top': '10px',
                    'z-index': '999'
                });
            } else {
                $(".bbs_container .advert:last iframe").css({
                    'position': 'relative',
                    'top': '',
                    'left': '',
                    'margin-top': '0',
                    'z-index': '0'
                });
            }
        });
    });
    //首页右侧下方广告位 下拉固定-end

    //返回顶部-start
    var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
        .text($backToTopTxt).attr("title", $backToTopTxt).click(function () {
            $("html, body").animate({scrollTop: 0}, 120);
        }), $backToTopFun = function () {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0) ? $backToTopEle.show() : $backToTopEle.hide();
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 166);
        }
    };
    $(window).bind("scroll", $backToTopFun);
    $backToTopFun();
    //返回顶部-end
});


// 关闭广告 -start
$(function () {
    //判断广告是否显示
    if (getAdCookie("ad_cls_status") == "true") {
        $(" .advert, .ad_left, .ad_right, #BAIDU_DUP_wrapper_231821_0, #BAIDU_DUP_wrapper_233824_0, .advertframe, .ad_box_250 iframe").remove();
        //首页右下角富媒体广告
        $("#BAIDU_SSP__wrapper_231821_0").remove();
        $(".cls_ad_btn").html('已关闭广告');
        //$(".cls_ad_btn").remove();
    }

    $(".cls_ad_btn").click(function () {
        $(" .advert, .ad_left, .ad_right, #BAIDU_DUP_wrapper_231821_0, #BAIDU_DUP_wrapper_233824_0, .advertframe, .ad_box_250 iframe").remove();
        //首页右下角富媒体广告
        $("#BAIDU_SSP__wrapper_231821_0").remove();
        setAdCookie("ad_cls_status", "true");
        $(".cls_ad_btn").html('已关闭广告');
    });
    //headeradvert  advert  ad_left ad_right #BAIDU_DUP_wrapper_231821_0

});

//利用cookie设置关闭广告后的不显示时长
function setAdCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + 60 * 30000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + date.toGMTString();
}

function getAdCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}

// 关闭广告 -end

var screenwidth = screen.availWidth;
var minWidth = 1279;
$(function () {
    if (screenwidth < minWidth) {
        $(".ad_close").css({'display': 'none'});
    }

    $("#ad_left_close").click(function () {
        $(".ad_left").hide();
    });
    $("#ad_right_close").click(function () {
        $(".ad_right").hide();
    });

    if (screenwidth < minWidth) {
        $(".ad_left").hide();
        $(".ad_right").hide();
    }
})

function cookie(name) {
    var cookieArray = document.cookie.split("; "); //得到分割的cookie名值对
    var cookie = new Object();
    for (var i = 0; i < cookieArray.length; i++) {
        var arr = cookieArray[i].split("=");       //将名和值分开
        if (arr[0] == name) return unescape(arr[1]); //如果是指定的cookie，则返回它的值
    }
    return "";
}

function addCookie(objName, objValue, objSeconds) {      //添加cookie
    var str = objName + "=" + escape(objValue);
//  var domain=".zhibo8.cc";
    if (objSeconds > 0) {                               //为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objSeconds * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();//+";domain="+domain+";path=/";
    }
    document.cookie = str;
}
