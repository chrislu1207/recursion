// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var matchedElements = [];
  function traverseDOM (node) {
  	if (node.classList && node.classList.contains(className)) {
  		matchedElements.push(node);
  	}
  	for (var i=0; i<node.childNodes.length; i++) {
  		traverseDOM(node.childNodes[i]);
  	}
  }
  traverseDOM(document.body);
  return matchedElements;
};