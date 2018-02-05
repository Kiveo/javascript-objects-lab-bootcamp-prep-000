var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newkey = key;
  object[newkey] = value;
  object.key = 'value';

  var newObj = Object;
  return newObj;
}
