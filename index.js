var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newkeyvalue = {key: value};
  var obj = object;
  return obj.assign({}, newkeyvalue);
}
