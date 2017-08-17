$(function () {
    /*导航*/
    $(".nav li").mouseover(function () {
        $(this).addClass("e").siblings("li").removeClass("e");
        $(".child p").mouseover(function () {
            $(this).addClass("e").siblings("p").removeClass("e");
        }).mouseout(function () {
            $(".nav li").removeClass("e");
        })
    })
    /*至平板手机端时候（点击列表按钮，左侧导航展开）*/
    var stw = true;
    $(".infinitypush").click(function () {
        if (stw) {
            $(".infinitypush-wrapper").stop().animate({
                left: 0
            })
            $("#wrapper").stop().animate({
                left: 150 + "px"
            })
            stw = false;
        }
        else {
            $(".infinitypush-wrapper").stop().animate({
                left: -150 + "px"
            })
            $("#wrapper").stop().animate({
                left: 0 + "px"
            })
            stw = true;
        }
    })

    
})

/*banner图片自适应*/
function banner() {
    var thisImg = $(".banner");
    var imgW = $(thisImg).parent(".container").width();
    $(thisImg).height(imgW * 5 / 9);
    $(".nav").height(imgW * 5 / 9);
}
/*列表banner图片自适应*/
function bannerList() {
    var thisImg = $(".banner");
    var imgW = $(thisImg).parent(".container").width();
    $(thisImg).height(imgW * 6 / 23);
    $(".nav").height(imgW * 6 / 23);
}