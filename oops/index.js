function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);
console.log(circle.draw());

//contruction function
function Circle(radius) {
  // console.log("this", this);
  this.radius = radius; //rafer the object that executing this piece of code
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(); //new return {}
// way to add property
circle.location = { x: 1 };
circle["location"] = { x: 1 };
delete circle.location;
console.log(another);
// in js fn are object

// ***************

// primitive->Number,string boolean,symbol,null,undefined
// refrence->object,Function,Array
// Primitives are copied by their value
let x = 10;
let y = x;

x = 20;

// Object are copied by their reference
let a = { value: 10 };
let b = a;

a.value = 20;

// example
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number);
// ans 10 because of the primitive are copied by their value

let obj = { value: 10 };
function inc(obj) {
  obj.value++;
}
inc(obj);
console.log(obj);

// *************
// Abstraction
// by assigning the property or method by let
// closure => where property can be use in function which is inside another function eg below

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 2 };
  let computeoptimimLocation = function (factore) {
    // ....
  };
  this.draw = function () {
    computeoptimimLocation(0.1);
    // defaultLocation

    console.log("draw");
  };
}
const circle = new Circle(10);
circle.draw();

// ***********
// getter / setter
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 2 };
  this.getdefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    computeoptimimLocation(0.1);
    // defaultLocation

    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (value.x || value.y) {
        console.log(congrates);
        defaultLocation = value;
      }
    },
  });
}
const circle = new Circle(10);
circle.defaultLocation = 1;

circle.draw();
learn;
// object .prototype
// high order and genertaor
