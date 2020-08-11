// iterate over document.body's childNodes
for (var i=0; i<document.body.childNodes.length; i++){
    var currentNode = document.body.childNodes[i];
    if (currentNode.nodeType == 1){
        // this is an element node
        console.log("Node is: "+currentNode.nodeName + " and is a "+currentNode);
    }else if (currentNode.nodeType == 3){
        //this is a text node
        console.log("Node is: "+currentNode.nodeValue + " and is a "+currentNode);        
    }
}
