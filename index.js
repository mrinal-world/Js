// Example of Encapsulation
/*
let employee = {
    baseSalary: 30_000,
    overTime: 20,
    rate: 10,
    getWage: function() {
        return this.baseSalary + (this.overTime * this.rate);
    }
};
console.log(employee.getWage());
*/

//Object Literals
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
}

circle.draw();
*/

// Factory Function
/* 
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw(); 
*/

// Constructor Function
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(1);
circle.draw();
*/

// Call by value
/*
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); 
*/

// Call by refrense
/*
let object = { value: 10};

function increase(obj) {
    obj.value++
}

increase(object);
console.log(object);
*/

// Adding or removing property
/*
function Circle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log('Draw');
    };
}

const circle = new Circle(1);
circle.location = { x:1 };

const token = {auth: 'auth Token', username: 'Mrinal' };
circle['token'] = token; //for dynamic

delete circle.location;
*/

//Enumerating properties
/*
function Circle(radius)  {
    this.radius = radius,
    this.draw = function() {
        console.log('Draw');
    };
}

const circle = new Circle(1);
// for(key in circle) {
//     console.log(key, circle[key]);
// }
for(key in circle) {
    if(typeof circle[key] != 'function'){

        console.log(key, circle[key]);
    }
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle)
    console.log('Circle has a radius');
    */

// Abstraction
// function Circle(radius) {
//     this.radius = radius;
//     this.defaultLocation = {x: 10, y: 20};

//     this.optimalLocation = function(factor) {
//         console.log(factor);
//     };

//     this.draw = function(){
//         this.optimalLocation(0.1);
//         console.log('Draw');
//     };
// }

// const circle = new Circle(1);
// circle.draw();

//converting it into abstraction
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = {x: 10, y: 20};

//     let optimalLocation = function(factor) {
//         console.log(factor);
//     };

//     this.draw = function(){
//         optimalLocation(0.1);

//         // defaultLocation;
//         // this.radius;

//         console.log('Draw');
//     };
// }

// const circle = new Circle(1);
// circle.draw();

// Getters and Setters

// function Circle(radius){
//     this.radius = radius;
//     let defaultLocation = {x: 20, y: 30};
//     this.draw = function() {
//         console.log('Draw');
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation;
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location');
//             defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(1);
// circle.defaultLocation = {x:10, y:50};
// circle.draw();

// Stop Watch
// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;

//     this.start = function() {
//         if (running)
//             throw new Error('Stop watch is already running');
        
//         running = true;
//         startTime = new Date();
//     };
//     this.stop = function() {
//         if (!running)
//             throw new Error('Stop watch is already stop');
//         running = false;
//         endTime = new Date();

//         const seconds = (endTime,getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };
//     this.reset = function() {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function() {
//             return duration;
//         }
//     });
// }


function Stopwatch() { 
    let startTime, endTime, running, duration = 0;
  
    this.start = function() {
      if (running) 
        throw new Error('Stopwatch has already started.');
      
      running = true; 
  
      startTime = new Date();
    };
  
    this.stop = function() {
      if (!running) 
        throw new Error('Stopwatch is not started.');
  
      running = false; 
        
      endTime = new Date();
  
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds; 
    };
  
    this.reset = function() { 
      startTime = null;
      endTime = null;
      running = false; 
      duration = 0; 
    };
  
    Object.defineProperty(this, 'duration', {
      get: function() { return duration; }
    });
  }
  

const sw = new Stopwatch();
