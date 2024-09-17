 const sel1 = document.getElementById("firstSelect");

 const selectList = {
     "fruits": ["Apple", "Banana", "Grapefruit", "Plantain"]
 }

 /*  First, populate the select.  
     For each element in the "selectList.fruits" array,
      we will create an <option> element, give it a
      text node that contains its label, set the 
      'value' attribute on our new <option> element, and 
      finally, add it to the <select> element. 
 */
 for (let i = 0; i < selectList.fruits.length; i++) {
     //create <option>
     const s = document.createElement("option");  
     // create text node
     const t = document.createTextNode(selectList.fruits[i]);
     // add text node to <option>
     s.appendChild(t);
     // set value="" on the <option>
     s.setAttribute("value", selectList.fruits[i]);
     // add the new <option> to the <select>
     sel1.appendChild(s);
 }

// This part will react to user selections on our drop-down list
// and write to the page
  sel1.addEventListener("change", function(e) {
     let val = this.value;
     document.getElementById('feedback').innerHTML = val + "s are good!"
 });
