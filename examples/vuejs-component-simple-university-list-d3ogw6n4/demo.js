 // set up our Vue Component
 var v = Vue.component('university-list', {
     data: function(){     //  this function returns the data object -- a closure in action!
       return {
         universityList: [
           { name: 'Harvard' },
           { name: "Yale" }
       ]}
     },
     template: '<div> \
       <ul> \
         <li v-for="school in universityList"> \
         {{ school.name }} \
         </li> \
       </ul> \
     </div> '
   });

// initialize the Vue app that will contain our component tag
var v = new Vue({   
  el: '#app'
});