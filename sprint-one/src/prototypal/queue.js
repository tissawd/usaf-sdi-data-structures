var Queue = function() {
  //declare empty object - object protypal assignment
  let queueObject = Object.create(queueMethods);
  //create storage object
  queueObject.storage = {};
  //set frontOfLine value
  queueObject.frontOfLine = 0;
  //set backOfLine value
  queueObject.backOfLine = 0;
  //return (was empty) object
  return queueObject;
};

var queueMethods = {
  //enqueue
  enqueue: function(value){
    this.backOfLine ++;
    this.storage[this.backOfLine] = value;
  },

  //dequeue
  dequeue: function () {
    //if statement
    if (this.backOfLine > this.frontOfLine){
      this.frontOfLine ++;
      let valTemp = this.storage[this.frontOfLine];
      delete this.storage[this.frontOfLine];
      return valTemp;
    }
  },
    
  //return size
  size: function () {
    return (this.backOfLine - this.frontOfLine);
  }
};