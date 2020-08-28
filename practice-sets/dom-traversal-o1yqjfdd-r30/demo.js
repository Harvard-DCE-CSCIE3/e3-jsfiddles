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
     
     * Finally, we get el's parent (which we assume to be an ElementNode, 
     * since textNodes can't really be anywhere else), and give it a 
     * class of "searchHit".
     */
    if (el.nodeType == el.TEXT_NODE){
        if (typeof el.nodeValue == "string"    
                  && el.nodeValue.indexOf(str) != -1){
            el.parentNode.setAttribute("class","searchHit");
        }
    }    
    
    
    for (var i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i], str)
    }
    // Or your code can go here - acting on the way back up 
    //  the tree towards the root


}
// here we call our traverse() function
traverse(document.documentElement, 'text');