
  var vc = Vue.component('university-list', {
      data: function() {
       return {
        universityList: [
        { city: "Cambridge", name: "Harvard", isBest: true },
        { city: "New Haven", name: "Yale" },
        { city: "Palo Alto", name: "Stanford" },
        { city: "New York", name: "Columbia" }
      ],
      	newSchool: { city: '', name: '', isBest: false }
      }},
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
      },
      template: '<div><ul> \
        <li v-for="(school, i) in universityList"> \
          <span v-bind:class="{ bestSchool : school.isBest }">{{ school.name }}</span> is in {{ school.city }} \
          <span v-if="school.isBest">and is the best!</span> \
          <span v-else>meh</span> \
          <button v-on:click="remove(i)">Remove</button>\
        </li> \
      </ul> \
      <form> \
        <label>Name: <input type="text" v-model="newSchool.name"></label><br> \
        <label>City: <input type="text" v-model="newSchool.city"></label><br> \
        <label> \
          Is Best? <input type="checkbox" v-model="newSchool.isBest"> \
        </label><br> \
        <button type="button" v-on:click="addSchool()"> \
         Add \
        </button> \
      </form></div>'
    });  // end component
    var v = new Vue({
      el: '#app'
    });

