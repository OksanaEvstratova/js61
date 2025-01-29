export default function orderByProps(obj, propList) {
  let sortedKeys = Object.keys(obj).sort();
  
  const sorted = {};  

  propList.forEach(function(item) {
    if (item in obj) {
      sorted[item] = obj[item];
      sortedKeys.splice(sortedKeys.indexOf(item), 1);
    } else {
      throw new Error('Неверное свойство');  
    }
    
    });
    sortedKeys.forEach(function(itemKey) {
      sorted[itemKey] = obj[itemKey];
    });
    return sorted;


}
