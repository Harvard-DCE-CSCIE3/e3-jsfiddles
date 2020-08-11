// We instantiate the player using the jwplayer() function, and 
//  passing it an object literal containing the config stuff

var player = jwplayer("videoDiv").setup({
    file: "http://www.learningapi.com/cscie3/examples/week13/nasa-spinoffs.mp4",
    height: 200,
    width: 300,
    controls: false,
});

// Wait for the player to be ready
player.on('ready', function () {
    // using jQuery to handle the Play button click
    //  jQuery was entirely optional for this - 
    //  The button-click handling would be easily done in plain JS, too,
    //   via 'document.getElementById("playBtn").addEventListener()'
        $('#playBtn').click(function (e) {
            // your code here to make the video play
            
        });
    // using jQuery to handle the Play button click    
        $('#pauseBtn').click(function (e) {
            // your code here to make the video pause
            
        });
}); // end of onReady

