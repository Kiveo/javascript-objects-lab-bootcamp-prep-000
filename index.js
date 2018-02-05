var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newkey = key;
  object[newkey] = value;

  var newObj = Object.assign({}, [newkey]);
  return newObj;
}
