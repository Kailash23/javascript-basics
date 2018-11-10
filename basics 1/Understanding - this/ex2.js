var myObject = {
  myMethod: function () {
    console.log(this);
  }
};

myObject.myMethod();

/*
  { myMethod: [Function: myMethod] }
*/
