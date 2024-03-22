const yamaha_showroom = {
  R15: true,
  R1: false,
};

//key & value pairs are destructured to variables
const { R15, R1 } = yamaha_showroom;
console.log(R15); //true

//variable named super_bike and assign the object key & values to the variable
const { R1: super_bike } = yamaha_showroom;
console.log(super_bike); //false

//eg
// recieve the object key as a variable using {}
let checkBikes = ({ R1 }) => {
  return R1;
};
//send the object as a argument
console.log(checkBikes(yamaha_showroom));
