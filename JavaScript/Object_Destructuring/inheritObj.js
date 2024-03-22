const showroom = {
  car: true,
  bus: true,
  cycle: false,
};

//creating a new object and inherit the showroom object
const car = Object.create(showroom);

//printing the bus key using car object
console.log(car.bus);

//adding key & values to car object
car.plane = false;
console.log(car); //plane:false
