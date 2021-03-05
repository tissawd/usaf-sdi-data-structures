var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create object
  let stackInstance = {};

  // create place to store values
  stackInstance.storage = {};
  stackInstance.currentSize = 0;

  // make object extend stackMethods object
  _.extend(stackInstance, stackMethods);

  //return object
  return stackInstance;

};

var stackMethods = {
  // define our methods for stack objects (use 'this' keyword)
  // define push method
  push: function(value){
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },
  // define pop method
  pop: function(){
    if (this.currentSize > 0){
      // store value
      let tempVal = this.storage[this.currentSize];
      // delete property from storage
      delete this.storage[this.currentSize];
      // decrement currentSize
      this.currentSize--;
      // return value
      return tempVal;
    }
  },

  // define size method
  size: function(){
    return this.currentSize;
  }
};


