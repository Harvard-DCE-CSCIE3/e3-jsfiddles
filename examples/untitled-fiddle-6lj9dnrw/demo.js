const v = new Vue({
    el: '#app',     // this is a selector for the HTML element that contains our Vue template
    data: {
      universityList: [
      { city: "Cambridge", name: "Harvard", isBest: true },
      { city: "New Haven", name: "Yale" },
      { city: "Palo Alto", name: "Stanford" },
      { city: "New York", name: "Columbia" }
    ]  
    }
});
