$(function () {
    var adv = '<style>' +
        '.adv{position:relative;width:990px;height:auto;margin:0 auto;display:none;z-index:1;}' +
        '#adv_close{position:absolute;right:-25px;top:0px;padding:2px 5px;background:#ddd;color:#000!important;}' +
        '#adv_close:hover{color:white;text-decoration:none;background:#fff;}' +
        '.ifm2{margin-bottom:-20px;}' +
        '</style>'+
        '<div class="adv_content">' +
                '<div class="container" style="height:auto;margin:20px auto; background:#fff;overflow:inherit;position:relative;z-index:8;">' +
                    '<a href="javascript:;" id="adv_close">关<br/>闭</a>' +
                '</div>' +
                '<div class="adv"></div>' +
             '</div>';

    var ifm = '<iframe id="ac_im86_460450643" name="ac_im86_460450643" src="//pcgg.qiumibao.com/webAdvert.php?ad_name=main_top_pulldown&platform=pc" width="990" height="460" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="true" ></iframe>';//'<iframe src="//www.zhibo8.cc/proxy.html?id=2704114" width="990" height="460" scrolling="no" frameborder="0" style="display:block;margin:0"></iframe>';
    //ifm = '<div><a href="https://s.click.taobao.com/g133UOx" target="_blank"><img src="http://tu.qiumibao.com/img/1111_990_460.jpg" /></a></div>';
    //var ifm2='<iframe src="//www.zhibo8.cc/proxy.html?id=2702946" width="990" height="90" scrolling="no" frameborder="0" style="display:block;margin:0"></iframe>';
    var ifm2 = '<iframe id="ac_im86_72982146" name="ac_im86_72982146" src="//pcgg.qiumibao.com/webAdvert.php?ad_name=main_top_hengfu&platform=pc" width="990" height="90" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="true" ></iframe>';


    var starttime = new Date('2018/07/12 00:00');
    var endtime   = new Date('2018/07/13 00:01');

    var banner_starttime = new Date('2018/07/05 23:55');
    var banner_endtime   = new Date('2018/07/07 00:01');
    var now = new Date();


    //三个只有一个为true
    var ifm_flag = false,//是否全部显示
        ifm1_flag = false,//是否只显示下拉
        ifm2_flag = false;//是否只显示底部

    $.ajax({
        type: "GET",
        url: '//pcgg.qiumibao.com/mainTop.php',
        dataType: 'json',
        success: function ($json) {
            if ($json.data.show_type == 0) {
                ifm_flag = true;
            } else if ($json.data.show_type == 1) {
                ifm1_flag = true;
            } else if ($json.data.show_type == 2) {
                ifm2_flag = true;
            }
            show_advert(ifm_flag, ifm1_flag, ifm2_flag);
        }
    });

    /*    if(now>starttime && now<endtime){
                ifm_flag=false;
                ifm1_flag=true;
                ifm2_flag=false;
        }

        if(now>banner_starttime && now<banner_endtime){
            ifm_flag=false;
            ifm1_flag=false;
            ifm2_flag=true;
        }

        if(now>starttime && now<endtime && now>banner_starttime && now<banner_endtime){
            ifm_flag=true;
            ifm1_flag=false;
            ifm2_flag=false;
        }*/

    function show_advert(ifm_flag, ifm1_flag, ifm2_flag) {
        if (ifm_flag) {
            $(".menu").after(adv);
            $(".adv").append(ifm);
            $(".adv").after('<div class="container ifm2">' + ifm2 + '</div>');
        }
        if (ifm1_flag) {
            $(".menu").after(adv);
            $(".adv").append(ifm);
        }
        if (ifm2_flag) {
            $(".menu").after(adv);
            $(".adv").after('<div class="container ifm2">' + ifm2 + '</div>');
        }

        if (ifm_flag) {
            setTimeout(function () {
                $(".adv").adv_slide({s_time: 500});
            }, 1000);
            //$(".ifm2 iframe").on("load",function(){
            // 	$(".adv").adv_slide({s_time:500});
            //})
        } else if (ifm1_flag) {
            $(".adv").adv_slide({s_time: 500});
        } else if (ifm2_flag) {
            $("#adv_close").hide();
        }
    }

    $.fn.adv_slide = function (options) {
        var options = $.extend({}, $.fn.adv_slide.defaults, options);
        var adv = this;
        var m_t = adv.css("margin-top");
        m_t = parseInt(m_t.substring(0, m_t.indexOf("px")));
        console.log(m_t)
        var timer;
        if (options.ifm1_flag) {
            adv.slideDown(options.s_time, function () {
                timer = setTimeout(function () {
                    adv.slideUp(500, function () {
                        $("#adv_close").html("展<br/>开");
                        if (ifm1_flag) {
                            $("#adv_close").css("display", "none");
                        }
                    });
                }, 8000);
            });
        }
        $("#adv_close").click(function () {
            if ($(this).text() == "关闭") {
                $(this).html("展<br/>开");
                adv.slideUp(options.e_time, function () {
                    $("#adv_close").html("展<br/>开");
                    if (ifm1_flag) {
                        $("#adv_close").css("display", "none");
                    }
                });
                clearTimeout(timer);
            } else {
                $(this).html("关<br/>闭");
//				adv.stop(false,true);
//				adv.animate({"margin-top":0},1000);
                adv.slideDown(options.e_time, function () {
                    $("#adv_close").html("关<br/>闭");
//					$("#adv_close").css("display","none");
                    timer = setTimeout(function () {
                        adv.slideUp(500, function () {
                            $("#adv_close").html("展<br/>开");
                            //					$("#adv_close").css("display","none");
                        });
                    }, 8000);
                });
                clearTimeout(timer);
            }
        });
    };
    $.fn.adv_slide.defaults = {
        width: 0,
        height: 0,
        swing: 'swing',
        s_time: 500,
        e_time: 500,
        ifm_flag: true,//判断是否要显示广告
        ifm1_flag: true,//判断是否要显示下拉广告
        ifm2_flag: true//判断是否要显示底部广告
    }
});
