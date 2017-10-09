// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

if (obj === null ) {

  return 'null';
}
// 
if (typeof obj === 'string') {
  return "\"" + obj + "\"";
}
// 
if(typeof obj === 'function' || typeof obj === 'undefined') {
  return ;
}

if(typeof obj === 'boolean') {
  if(obj === false){
    return 'false';
}
  return 'true';
}

if(Array.isArray(obj) && obj.length === 0){
  return '[]';
 } else if (Array.isArray(obj)) {
    var output = [];
    obj.forEach(function(item){
      output.push(stringifyJSON(item));
    });
    return '[' + output + ']';

}

if(typeof obj === 'object') {
  var result = '';
  var getkeys = Object.keys(obj);
    if(getkeys.length === 0) {
      return '{}';
    }
  
  getkeys.forEach(function(item,idx){
    if(item === 'functions'|| item === 'undefined'){
      return;
    } else if(idx === getkeys.length-1){
        result += stringifyJSON(item) + ":" + stringifyJSON(obj[item])
    } else {
        result += stringifyJSON(item) + ":" + stringifyJSON(obj[item])+ ","
           }
  });
return '{'+ result + '}';
}

  //go through all the properties in the object
  //add the stringified key to the result
  //add the colon to the results
  //add the stringified value to the result
  //add a comma after the value
  //return the results surrounded by the brackets within quotes
  
return '' + obj;
};
