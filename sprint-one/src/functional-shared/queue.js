var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //declare empty object
  let queueInstance = {};
  //declare a storage object
  queueInstance.storageObject = {};
  //declare front of line holder variable
  queueInstance.frontOfLine = 0;
  //declare back of line of holder variable
  queueInstance.backOfLine = 0;
  //use extend technique from slide 25, but correct to README _extend
  _.extend(queueInstance, queueMethods);
  //return queueInstance, which is now a result of all operations
  return queueInstance;
};

var queueMethods = {
  //need an enqueue method, which increments up back of line property
  enqueue: function(value){
    this.backOfLine ++;
    this.storageObject[this.backOfLine] = value;
  },

  //need a dequeue method
  dequeue: function(){
    //test case for back larger than front
    if (this.backOfLine > this.frontOfLine){
      //increment up front holder variable
      this.frontOfLine ++;
      //declare variable for incremented front holder value
      let tempFront = this.storageObject[this.frontOfLine];
      //delete first value/key of front holder variable
      delete this.storageObject[this.frontOfLine];
      //return variable for incremented front holder value
      return tempFront;
    };
  },

  //return size for storage object
  size: function(){
    return (this.backOfLine - this.frontOfLine)
  }

};


