// here is our traverse() function
function traverse(el, str) {
    /*
     * @param {HTMLElement} el - the element we're visiting now
     * @param {String} str - the string we're searching for
     */

    // Your code can go here - acting on the way down 
    //   the tree towards the branches
    /* SOLUTION NOTE:
     * There are lots of options here for how to do this,
     * but all will have to test the nodeType to see if it's
     * 3 (node.TEXT_NODE is a constant that always equals 3)
     * and will have to check el.nodeValue to see if it's got
     * str within it. 
     
     * Once we know we have a textNode, it seems prudent to check that 
     * its nodeValue is a string, otherwise calling a string method like 
     * indexOf() will throw an error and our code will stop executing.
     * We could also use String.includes() in place of String.indexOf()

     
     * Since we don't want to highlight this node and every node 
     * under it in the DOM tree (due to CSS cascading), we need to create 
     * a new tag that will contain just this text node alone so that only it
     * is highlighted. So, we create a SPAN and insert it into the parent
     * right before this textNode. Then we append the textNode to that 
     * SPAN, and apply the 'searchHit' class to the SPAN. 
     *
     */
    if (el.nodeType == el.TEXT_NODE){
        if (typeof el.nodeValue == "string"    
                  && el.nodeValue.indexOf(str) != -1){
              
                let d = document.createElement("span"); // new SPAN
                let p = el.parentNode;       
                p.insertBefore(d, el);   // insert it right before text node
                d.appendChild(el);       // move text node into the span
                d.setAttribute("class","searchHit");  // apply highlight
        }
    }    
    
    
    for (let i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i], str)
    }
    // Or your code can go here - acting on the way back up 
    //  the tree towards the root


}
// here we call our traverse() function
traverse(document.documentElement, 'text');
