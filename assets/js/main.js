function timer() {
    var d = new Date();
    var h = d.getHours(), m = d.getMinutes(), s = d.getSeconds(), r;
    var day = d.getDate(), month = d.getMonth() + 1, y = d.getFullYear();
    r = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + "<br/>" + (day < 10 ? "0" + day : day) + "." + (month < 10 ? "0" + month : month) + "." + y;
    ;
    $("#clockbox").html(r);
}
;

$(function () {
    setInterval("timer()", 1000);
});

//sticky menu

$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').css('visibility', 'visible').removeClass('original').hide().children('ul').addClass("menu-hide");
$('<button type="button" class="menu-button"><i class="fa fa-bars"></i></button>').insertBefore($('.menu-hide'));
$('.cloned').children('hr').addClass('menu-hide');
scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        $('.original').css('visibility', 'hidden');
    } else {
        $('.cloned').hide();
        $('.original').css('visibility', 'visible');
    }
}

$('.menu-button').click(function () {
    var element = $('.menu-hide');
    if (!element.is(":visible")) {
        element.fadeIn(1000);
    } else {
        element.fadeOut(1000);
    }
});

//validacja

//$("#name").on("input", function (event) {
//    var nameReg = /^[a-z ,.'-]+$/i;
//    var name = $("#name").val();
//    if (name.length === 0 || name.length > 100 || !nameReg.test(name)) {
//        $("#name").addClass("errorInput");
//        $(".nameWarning").show();
//        $("#sendForm").attr("disabled", "disabled");
//    } else {
//        $("#name").removeClass("errorInput");
//        $(".nameWarning").hide();
//        $("#sendForm").removeAttr("disabled");
//    }
//});
//
//$("#email").on("input", function (event) {
//    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    var email = $("#email").val();
//    if (email.length === 0 || !emailReg.test(email)) {
//        $("#email").addClass("errorInput");
//        $(".emailWarning").show();
//        $("#sendForm").attr("disabled", "disabled");
//    } else {
//        $("#email").removeClass("errorInput");
//        $(".emailWarning").hide();
//        $("#sendForm").removeAttr("disabled");
//    }
//});
//$("#tresc").on("input", function (event) {
//    var tresc = $("#tresc").val();
//    if (tresc.length === 0 || tresc.length > 1000) {
//        $("#tresc").addClass("errorInput");
//        $(".trescWarning").show();
//        $("#sendForm").attr("disabled", "disabled");
//    } else {
//        $("#tresc").removeClass("errorInput");
//        $(".trescWarning").hide();
//        $("#sendForm").removeAttr("disabled");
//    }
//});


//validacja 2


$("#sendForm").on("click", function (event) {
    event.preventDefault();
    $(".warning").hide();

    $(this).removeAttr("disabled");
    $(".pole").removeClass("errorInput");

    var nameok = false;
    var nameReg = /^[a-z ,.'-]+$/i;
    var name = $("#name").val();
    if (name.length === 0 || name.length > 100 || !nameReg.test(name)) {
        $("#name").addClass("errorInput");
        $(".nameWarning").show();
    } else {
        nameok = true;
    }
    var emailok = false;
    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = $("#email").val();
    if (email.length === 0 || !emailReg.test(email)) {
        $("#email").addClass("errorInput");
        $(".emailWarning").show();
    } else {
        emailok = true;
    }
    var trescok = false;
    var tresc = $("#tresc").val();
    if (tresc.length === 0 || tresc.length > 1000) {
        $("#tresc").addClass("errorInput");
        $(".trescWarning").show();
    } else {
        trescok = true;
    }
    if (nameok && trescok && emailok) {
        $(".kontaktForm").submit();
        console.log("Send");
    }

});

$(document).keydown(function (e) {
    var url = window.location.href;
    var page = url.substring(url.lastIndexOf("/") + 1, url.length);
    var base = url.substring(0, url.lastIndexOf("/") + 1);
    var next = "";
    switch (e.which) {
        case 37:
            switch (page) {
                case "index.html":
                    next = "kontakt.html";
                    break;
                case "kontakt.html":
                    next = "galeria.html";
                    break;
                case "galeria.html":
                    next = "droga.html";
                    break;
                case "droga.html":
                    next = "gwiazdy.html";
                    break;
                case "gwiazdy.html":
                    next = "czarne.html";
                    break;
                case "czarne.html":
                    next = "uklad2.html";
                    break;
                case "uklad2.html":
                    next = "uklad1.html";
                    break;
                case "uklad1.html":
                    next = "index.html";
                    break;
            }
            window.location.replace(base + next);
            break;
        case 39: // right
            switch (page) {
                case "index.html":
                    next = "uklad1.html";
                    break;
                case "uklad1.html":
                    next = "uklad2.html";
                    break;
                case "uklad2.html":
                    next = "czarne.html";
                    break;
                case "czarne.html":
                    next = "gwiazdy.html";
                    break;
                case "gwiazdy.html":
                    next = "droga.html";
                    break;
                case "droga.html":
                    next = "galeria.html";
                    break;
                case "galeria.html":
                    next = "kontakt.html";
                    break;
                case "kontakt.html":
                    next = "index.html";
                    break;
            }
            window.location.replace(base + next);
            break;
    }
});


