// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
   var nodeArray = [];
   var rootNode = document.body;

  var getElements = function(currentElem){
    if(currentElem.classList && currentElem.classList.contains(className)) {
      nodeArray.push(currentElem);
    }
    if(currentElem.children){
      for(var i = 0; i < currentElem.children.length; i++){
        getElements(currentElem.children[i]);      
      }
      
    }

}
  getElements(rootNode);




  //get all the nodes with the target class name
  //check to see if element has the class name
  //if it does, add the node to the array of nodes
  //check to see if element has children nodes
  //if it does run the recursive function on each child node
  //return the node array
  console.log(nodeArray);
  return nodeArray;
};
