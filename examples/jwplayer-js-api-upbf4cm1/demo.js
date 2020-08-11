// We instantiate the player using the jwplayer() function, and 
//  passing it an object literal containing the config stuff

var player = jwplayer("videoDiv").setup({
    file: "http://www.learningapi.com/cscie3/examples/week13/nasa-spinoffs.mp4",
    height: 200,
    width: 300,
    controls: true,
});

// Wait for the player to be ready
player.on('ready', function () {

    // now use jQuery hover to detect the mouse over the video
    $('#videoDiv').hover(
        // first our mouseover function
        // in which we'll tell the player to 'play'
        function (e) {
            console.log("over");
            player.play();
        }, 
        // then our mouseout function
        // in which we'll tell the player to 'pause'
        function (e) {
            console.log("out");
            player.pause();
        }); // end of jquery.hover
    
}); // end of onReady