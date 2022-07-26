// longStr is never collected in below code
// originalThing points to thing

let thing = null;

let makeMe = function () {

  let originalThing = thing;

  let unused = function () {
    if (originalThing)
      console.log("hi");
    };
  thing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log(someMessage);
    }

  };
    originalThing = null; // fix to prevent memory leak
};

setInterval(makeMe, 1000);



var theThing = null;

var replaceThing = function () {
  var originalThing = theThing;
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log(someMessage);
    }
  };
};
setInterval(replaceThing, 1000);



// be mindful not to create accidental globals when using arrow functions


// USE STACK MEMORY EFFECIVELY
// Avoid heap object references from stack variables when possible. Also, don't keep unused variables.
// Destructure and use fields needed from an object or array rather than passing around entire objects/arrays to functions, closures, timers, and event handlers. 
// This avoids keeping a reference to objects inside closures. 
// The fields passed might mostly be primitives, which will be kept in the stack.

// USE HEAP MEMORY EFFECTIVELY
//It's not possible to avoid using heap memory in any realistic application, but we can make them more efficient by following some of these tips:

// 1. Copy objects where possible instead of passing references. Pass a reference only if the object is huge and a copy operation is expensive.
// 2. Avoid object mutations as much as possible. Instead, use object spread or Object.assign to copy them.
// 3. Avoid creating multiple references to the same object. Instead, make a copy of the object.
// 4. Use short-lived variables.
// 5. Avoid creating huge object trees. If they are unavoidable, try to keep them short-lived in the local scope.