function flatten(arr, result) {
  if (typeof result === "undefined") {
    result = [];
  }
  for (var i = 0; i < length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
