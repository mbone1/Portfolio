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
    window.location.href = "http://github.com/mbone1";
})


$("#linkedin").click(function() {
    window.location.href = "http://www.linkedin.com/in/matthew-bonneville-944a431a9/";

})
$("#phone").click(function() {
    $("#number").toggleClass("is-hidden");

})

$("#email").click(function() {
    $("#address").toggleClass("is-hidden");

})
$("#resume").click(function() {
    $("#linkresume").toggleClass("is-hidden");

})

$("#weather").click(function() {
    $("#wdb").toggleClass("is-hidden");

})
$("#geo").click(function() {
    $("#egt").toggleClass("is-hidden");

})
$("#scheduler").click(function() {
    $("#wds").toggleClass("is-hidden");

})

$("#paint").click(function() {
    $("#img2").attr("src", "selfportrait.jpg")
})
$("#camera").click(function() {
    $("#img2").attr("src", "portrait.jpg")
})