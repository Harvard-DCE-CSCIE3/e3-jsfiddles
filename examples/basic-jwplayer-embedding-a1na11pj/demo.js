// We instantiate the player using the jwplayer() function, and 
//  passing it an object literal containing the config stuff

   const player = jwplayer("videoDiv").setup({
       file: "http://learningapi.com/cscie3/examples/week13/nasa-spinoffs.mp4",
        height: 200,
        width: 300,
        controls:true,
    });