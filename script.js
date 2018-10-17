var app = new Vue({
  el: '#calculator',
  data: {
    sum: [],
    screenNum: 0,
    screenArray: [],
  },
  methods: {
    inputNum: function (input) {
      // screen array can only add a zero if the array length is zero
      if (this.screenArray[0] !== 0) {
        
      }




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