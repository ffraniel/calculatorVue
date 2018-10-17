var app = new Vue({
  el: '#calculator',
  data: {
    sum: []
  },
  methods: {
    inputNum: function (input) {
      console.log("input: ", input, " - ", this.sum)
    },
    clearData: function () {
        this.sum = [];
    },
    equals: function (){

    },
  }
})