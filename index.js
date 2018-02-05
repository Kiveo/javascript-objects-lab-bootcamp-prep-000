var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newkeyvalue = {key: value};
  var newObj = Object.assign({}, newkeyvalue); //object parameter intelligently detected. Neat.
  return newObj;
}
