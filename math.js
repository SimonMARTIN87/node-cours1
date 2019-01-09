
var leModuleDeMath = {
  multiplier: function () {
    var result = 1;
    for (var x of arguments) {
      result *= x;
    }
    return result;
  },

  carre: function (a) {
    return this.multiplier(a,a);
  },

  puissance3: function (a) {
    return this.multiplier(a,a,a);
  }
};

module.exports = leModuleDeMath;
