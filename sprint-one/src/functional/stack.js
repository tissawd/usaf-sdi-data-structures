var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let currentTop = 0;
 

  // Implement the methods below
  someInstance.push = function(value) {
    currentTop += 1;
    storage[currentTop] = value;
    
  };

  someInstance.pop = function() {
    if (currentTop > 0){
    // store value 
    let valueNext = storage[currentTop];
    // remove property
    delete storage[currentTop];
    // decrement top
    currentTop -= 1;  
    //return val
    return valueNext;
    }
  };

  someInstance.size = function() {
    return currentTop;
  };

  return someInstance;
};
