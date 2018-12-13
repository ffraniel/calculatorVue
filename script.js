var app = new Vue({
  el: '#calculator',
  data: {
    previousNumber: [],
    currentNumber: [],
    currentOperator : null,
    result: null,
  },
  methods: {
    inputNum: function (input) {
      if (input === '.' && this.currentNumber.indexOf('.') === -1) {
        if (this.currentNumber.length === 0) {
          this.currentNumber.push(0);
        }
        this.currentNumber.push(input);
      } else if (typeof input === 'number') {
        this.currentNumber.push(input);
      }
    },
    clearData: function () {
      this.currentNumber = [];
      this.previousNumber = [];
      this.currentOperator = null;
      this.result = null;
    },
    equals: function (){
      
      // if(this.previousNumber.length === 0 || this.currentOperator === null) {
      //   this.result = this.previousNumber.join("");
      //   this.resultShowing = true;
      // }

      let previousNumber = Number(this.previousNumber.join(""));
      let screenNumber = Number(this.currentNumber.join(""));

      if (this.currentOperator === '+') {
        this.result = previousNumber + screenNumber;
      }
      else if (this.currentOperator === '-') {
        this.result = previousNumber - screenNumber;
      }
      else if (this.currentOperator === '*') {
        this.result = previousNumber * screenNumber;
      } 
      else if (this.currentOperator === '/') {
        this.result = previousNumber / screenNumber;
      }

      this.currentNumber = [ Number(this.result)];
      this.currentOperator = null;
      this.previousNumber = [];
    },
    operator: function (operatorChoice) {
      let currentNumber = Array.isArray(this.currentNumber) ? Number(this.currentNumber.join("")): this.currentNumber ;
      this.previousNumber.push(currentNumber);

      if (this.currentOperator === null) {
        this.currentOperator = operatorChoice;
        this.currentNumber = [];
        console.log("operator current: ", this.currentOperator)
        console.log("current previousNumber ", this.previousNumber);

      } else {
        // this.previousNumber = [];
        // this.previousNumber.push(this.result);
        // this.currentOperator = operatorChoice;
        // this.currentNumber = [];
        //call this.equals process
        (console.log("this.equals() before anything else"))
        // this.currentOperator = null;
      }
    },
  },
  computed: {
    displayNumber: function () {
      if(this.previousNumber.length === 0) {
        return this.currentNumber.join("");
      } 
      else {
        let currentNumberAsVar = Array.isArray(this.currentNumber) ? this.currentNumber.join("") : this.currentNumber;
        return this.previousNumber.join("").concat(this.currentOperator, currentNumberAsVar);
      }
    }
  }
})