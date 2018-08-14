/*
  KeyPoints:
  - const VS let
  - arrow functions & ES6
    - ECMAScript 6 https://tc39.github.io/ecma262/
    - ES6 features http://es6-features.org/#Constants
  - redundancy !== DRY code


  KeyWords:
  - DRY
  - ES6
  - Lexical "this"
  - scope (block, lexical)
*/

const dogs = {
  raining: true,
  noise: 'Woof!',
  makeNoise: function() {
    this.raining && console.log(this.noise);
  }
};

const cats = {
  raining: false,
  noise: 'Meow!',
  makeNoise: function() {
    this.raining && console.log(this.noise);
  }
};

const massHysteria = (dog, cat) => {
  if (dog.raining && cat.raining) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA.');
  }
};
dogs.makeNoise();
cats.makeNoise();
massHysteria(dogs, cats);

/*
*/
console.clear();
cats.raining = true;
dogs.makeNoise();
cats.makeNoise();
massHysteria(dogs, cats);
