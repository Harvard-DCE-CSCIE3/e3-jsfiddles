/* To solve this one, there are many options. In this very simple version, we do four things.
	 1) Add a data property called 'name' to the Vue object
   2) Add  {{ name }} to the template so name will be displayed
   3) Add a method called showData that sets a value for the 'name' data property
   4) Add a 'v-on' property to the button so the method gets called on click 
*/

var v = new Vue({
    el: '#app',     // this is a selector for the HTML element that contains our Vue template
    data: {
     	name: "",
    },
    methods: {
      	showData: function(){
        	this.name = "Simon";
        }
    }
});