$("#about").click(function() {
    $("#rightPanel").html('');
    $("#rightPanel").append("<figure class=is-fullwidth id=holder>");
    $("#holder").append("<img src=" + portrait + ">")
    $("#holder").append("<p>" + textContent + "</p>")

    // <figure class="is-fullwidth"> <img src="portrait.jpg " alt="Photograph of Matt Bonneville" />
    // </figure>
    // <p class="description">I'm Matt. I'm currently attending a coding boot-camp offered thru University of Arizona. I have a passion for problem solving and learning, I'm from California originally, but have lived in Arizona for most of my life. I've worked
    //     in various customer service and management positions. Right now, I'm focused on learning.</p>

})
let portrait = "portrait.jpg"
let textContent = "I'm Matt. I'm currently attending a coding boot-camp offered thru University of Arizona. I have a passion for problem solving and learning, I'm from California originally, but have lived in Arizona for most of my life. I've worked in various customer service and management positions. Right now, I'm focused on learning."


$("#portfolio").click(function() {
    $("#rightPanel").html('')

})



$("#contact").click(function() {
    $("#rightPanel").html('')

})