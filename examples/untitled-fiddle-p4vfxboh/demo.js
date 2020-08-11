var v = new Vue({
    el: '#app',     // this is a selector for the HTML element that contains our Vue template
    data: {
      universityList: [
      { city: "Cambridge", name: "Harvard", isBest: true },
      { city: "New Haven", name: "Yale" },
      { city: "Palo Alto", name: "Stanford" },
      { city: "New York", name: "Columbia" }
    ],
    	newSchool: { city: '', name: '', isBest: false }
    },
    methods: {
    	remove : function(item){
      	this.universityList.splice(item,1);
      },
      addSchool : function(){
      	this.universityList.push({
          city: this.newSchool.city,
          name: this.newSchool.name,
          isBest: this.newSchool.isBest
        });
        this.newSchool.name = '';
        this.newSchool.city = '';
        this.newSchool.isBest = false;
      }
    }
});
