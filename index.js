var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newkeyvalue = {key: value};
  var newObj = object.assign({}, newkeyvalue);
  return newObj;
}
