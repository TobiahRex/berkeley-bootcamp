/*
  KeyPoints:
  - const VS let
  - arrow functions & ES6
    - ECMAScript 6 https://tc39.github.io/ecma262/
    - ES6 features http://es6-features.org/#Constants
  - redundancy !== DRY code


  KeyWords:
  - class & function declaration
*/

class Animal {
  constructor(noise, raining) {
    this.noise = noise;
    this.raining = raining;
  }

  makeNoise() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
}

const cat = new Animal('Meow!', false);
const dog = new Animal('Woof!', true);

dog.makeNoise();
cat.makeNoise();
cat.raining = true;
cat.makeNoise();
