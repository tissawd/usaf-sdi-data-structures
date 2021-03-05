var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create instance object with stackMethods object as the prototype
  let stackInstance = Object.create(stackMethods);
  
  // add storage object to stack instance
  stackInstance.storage = {};

  // add size property to stack instance
  stackInstance.currentSize = 0;

  // return stack instance
  return stackInstance; 

};

var stackMethods = {
// method for pushing values on to the stack
push: function(value){
  this.currentSize++;
  this.storage[this.currentSize] = value;
},

// method for popping values off the stack
pop: function(){
  if (this.currentSize > 0){
    let tempVal = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    this.currentSize--;
    return tempVal;
  }
},

// method for returning the size of the stack
size: function(){
  return this.currentSize;
}

};


