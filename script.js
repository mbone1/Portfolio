$("#about").click(function() {
    $("#portfolio1").addClass("is-hidden");
    $("#contact1").addClass("is-hidden");
    $("#about1").removeClass("is-hidden");
    // $("#rightPanel").html('');
    // $("#rightPanel").append("<figure class=is-fullwidth id=holder>");
    // $("#holder").append("<img src=" + portrait + ">")
    // $("#holder").append("<p>" + textContent + "</p>")

})

$("#portfolio").click(function() {
    $("#contact1").addClass("is-hidden");
    $("#about1").addClass("is-hidden");
    $("#portfolio1").removeClass("is-hidden");



})

$("#contact").click(function() {
    $("#portfolio1").addClass("is-hidden");
    $("#about1").addClass("is-hidden");
    $("#contact1").removeClass("is-hidden");

})


$("#github").click(function() {
    window.location.href = "htps://github.com/mbone1";
})

$("#resume").click(function() {
    window.location.href = "Resume-Matthew-Bonneville.pdf";
})


$("#linkedin").click(function() {
    window.location.href = "https://www.linkedin.com/in/matthew-bonneville-944a431a9/";

})

$("#email").click(function() {
    window.location.href = "mailto: m.bonnev10@gmail.com";

})

$("#paint").click(function() {
    $("#img1").attr("src", "selfportrait.jpg")
})
$("#camera").click(function() {
    $("#img1").attr("src", "portrait.jpg")
})