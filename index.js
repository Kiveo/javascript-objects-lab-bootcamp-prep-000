var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newkeyvalue = {key: value};
  var newObj = Object.assign({key, value});
  return newObj;
}
