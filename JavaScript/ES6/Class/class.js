class Employess {
  constructor() {
    this.empDetails = [
      {
        emp1: {
          name: "Madhu",
          eid: 101,
          salary: 5000000,
          loc: ["Salem", " TamilNadu"],
        },
        emp2: {
          name: "Divya",
          eid: 102,
          salary: 50000,
          loc: ["Mumbai", " TamilNadu"],
        },
        emp3: {
          name: "Akshayaa",
          eid: 103,
          salary: 500000,
          loc: ["Salem", " TamilNadu"],
        },
      },
    ];
  }
  printDetails() {
    for (this.emps of this.empDetails) {
      let empName = this.emps;
      return console.log(empName);
    }
  }
}
let data = new Employess();

data.printDetails();
