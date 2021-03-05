var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.backOfLine = 0;
  this.frontOfLine = 0;

};

Queue.prototype.enqueue = function (value) {
  this.backOfLine ++;
  this.storage[this.backOfLine] = value;
};

Queue.prototype.dequeue = function () {
  if (this.backOfLine > this.frontOfLine) {
    this.frontOfLine ++;
    let tempVal = this.storage[this.frontOfLine];
    delete this.storage[this.frontOfLine];
    return tempVal;
  };
};

Queue.prototype.size = function (){
  return this.backOfLine - this.frontOfLine;
}

const queue = new Queue();

//hmm, I'll look later, its close though.... break time

