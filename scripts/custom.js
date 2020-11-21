$(function () {
    var interval;

    $("#slideRight").click(function () {
        addClasses();
        clearInterval(interval);
        timer();
    })

    $("#stop").click(function () {
        clearInterval(interval);
    });

    $("#play").click(function () {
        timer();
    });

    var timer = function () {
        interval = setInterval(function () {
            addClasses()
        }, 4000);
    };

    timer();
});

function addClasses() {
    $('.overlay .item').each(function () {
        if ($(this).hasClass("cover")) {
            $(this).addClass("r-50").removeClass("cover");
        } else if ($(this).hasClass("r-50")) {
            $(this).addClass("r-0").removeClass("r-50").find(".shadow ul").removeClass("animate__fadeOutDown");
        }
        else if ($(this).hasClass("r-0")) {
            $(this).addClass("r-10").removeClass("r-0");
        }
        else if ($(this).hasClass("r-10")) {
            $(this).addClass("r-20").removeClass("r-10");
        }
        else if ($(this).hasClass("r-20")) {
            $(this).addClass("r-30").removeClass("r-20");
        }
        else if ($(this).hasClass("r-30")) {
            $(this).addClass("ani-cover").removeClass("r-30").find(".shadow ul").addClass("animate__fadeOutDown");
        }
        else if ($(this).hasClass("ani-cover")) {
            $(this).addClass("r-50").removeClass("ani-cover");
        }
    });

    changeContent();
    progressBar();
}

var i = 0;

function progressBar() {
    // alert(i);
    if (i == 0) {
        $("#progressBar").addClass("progress-1");
        $("#count").text("1");
    } else if (i == 1) {
        $("#progressBar").addClass("progress-2").removeClass("progress-1");
        $("#count").text("2");
    } else if (i == 2) {
        $("#progressBar").addClass("progress-3").removeClass("progress-2");
        $("#count").text("3");
    } else if (i == 3) {
        $("#progressBar").addClass("progress-4").removeClass("progress-3");
        $("#count").text("4");
    } else if (i == 4) {
        $("#progressBar").addClass("progress-5").removeClass("progress-4");
        $("#count").text("5");
    } else if (i == 5) {
        $("#progressBar").addClass("progress-6").removeClass("progress-5");
        $("#count").text("6");
    } else if (i == 6) {
        $("#progressBar").removeClass().addClass("progress-bar animate__animated");
        $("#count").text("0");
        i = -1;
    }
    i++;
};

function changeContent() {
    $('.overlay .item').each(function () {
        if ($(".ani-cover").hasClass("item-0")) {
            index = 4;
            $(".content").eq(index).addClass("show").siblings().removeClass("show");
        } else if ($(".ani-cover").hasClass("item-1")) {
            index = 5;
            $(".content").eq(index).addClass("show").siblings().removeClass("show");
        }
        else if ($(".ani-cover").hasClass("item-2")) {
            index = 0;
            $(".content").eq(index).addClass("show").siblings().removeClass("show");
        }
        else if ($(".ani-cover").hasClass("item-3")) {
            index = 1;
            $(".content").eq(index).addClass("show").siblings().removeClass("show");
        }
        else if ($(".ani-cover").hasClass("item-4")) {
            index = 2;
            $(".content").eq(index).addClass("show").siblings().removeClass("show");
        }
        else if ($(".ani-cover").hasClass("item-5")) {
            index = 3;
            $(".content").eq(index).addClass("show").siblings().removeClass("show");
        }
    });
}
