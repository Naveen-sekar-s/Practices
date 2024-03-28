class Test {
  constructor() {
    this.name = "Naveen";
    this.loc = ["Salem", "TamilNadu"];
    this.aadhar = [];
  }

  getAadharNo() {
    return this.aadhar;
  }

  setAadharNo(newAadhar) {
    return this.aadhar.push(newAadhar);
  }

  printData = () => {
    console.log(
      `My name is ${this.name} I'm from ${this.loc[0]} My aadhar id No is ${this.aadhar[1]}`
    );
  };
}

//create new object
let newObj = new Test();

//updating aadhar
newObj.setAadharNo("6666 - 7777 - 8888");
newObj.setAadharNo("1111 - 2222 - 3333");

//printing data's
newObj.printData();
