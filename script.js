var app = new Vue({
  el: '#calculator',
  data: {
    sum: [],
    screenNum: 0,
    screenArray: [],
  },
  methods: {
    inputNum: function (input) {
      if (input === '.' && this.screenArray.indexOf('.') === -1) {
        if (this.screenArray.length === 0) {
          this.screenArray.push(0);
          this.screenArray.push(input);
        } else {
          this.screenArray.push(input);
        }
      } else if (typeof input === 'number') {
        this.screenArray.push(input);
      }
    },
    inputDec: function (input) {
    },
    clearData: function () {
      this.screenArray = [];
    },
    equals: function (){

    },
  },
  computed: {
    displayNumber: function () {
      return this.screenArray.join("");
    }
  }
})