var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  let frontOfLine = 0; 
  let backOfLine = 0;
   // Implement the methods below

  someInstance.enqueue = function(value) {
    backOfLine ++;
    storage[backOfLine] = value;
  };

  someInstance.dequeue = function() {
    if (backOfLine > frontOfLine) {
      frontOfLine ++;
      let valueFront = storage[frontOfLine];
      delete storage[frontOfLine];
      return valueFront;
    }
  };

  someInstance.size = function() {
    let size = (backOfLine - frontOfLine);
    return size;
  };

  return someInstance;
};


