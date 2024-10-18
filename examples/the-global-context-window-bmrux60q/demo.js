/// NOTE: this code no longer demonstrates what it was supposed to, since
//    JSFiddle changed their system so that it contains the scope of code
//    entered by users in the Javascript panel. In the older version of JSFiddle,
//    users could control page loading behavior (and scope).

// Move this code to local JS files and you will see it behave as documented
//   and demonstrated in the video.

var school = "Harvard";

console.log(`school is ${school}`);               // Harvard
console.log(`window.school is ${window.school}`); // Harvard
console.log(window);

