var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newkeyvalue = {key: value};
  return object.assign({}, newkeyvalue);
}
