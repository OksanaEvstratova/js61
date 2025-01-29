export default function orderByProps(obj, propList) {
  let sortedKeys = Object.keys(obj).sort();
  
  const sorted = {};  

  propList.forEach(function(item) {
    if (item in obj) {
      sorted[item] = obj[item];
      sortedKeys.splice(sortedKeys.indexOf(item), 1);
    }
    });
    sortedKeys.forEach(function(item) {
    if (item in obj) {
      sorted[item] = obj[item];
    }
    });
    return sorted;


}
