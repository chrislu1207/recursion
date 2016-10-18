// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) { // Case where object is null
    return "null";
  } else if (typeof(obj) === 'string') { // Case where object is of type string
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) { // Case where object is of type array
    if (obj.length) {
      var JSONstring = [];
      for (var i = 0; i < obj.length; i++) {
        JSONstring.push(stringifyJSON(obj[i]));
      }
      return '[' + JSONstring.join(",") + ']';
    } else {
      return '[]';
    }
  } else if (typeof(obj) === 'object') { // Case where object is of type object
    var keys = Object.keys(obj);
    var endOfObject = keys.length - 1;
    if (keys.length) {
      var JSONstring = '';
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function') {
          // Do nothing
        } else {
          if (i === endOfObject) {
            JSONstring += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          } else {
            JSONstring += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
          }
        }
      }
      return '{' + JSONstring + '}';
    } else {
      return '{}';
    }
  } else { // Case where object is boolean or number
    return obj.toString();
  }
};
