class PersonalDetails {
  constructor() {
    this.name = "Akshayaa";
    this.blood = "O+";
    this.mobile = 9574638920;
    this.loc = "Salem";
  }
}

class EmployeeDetails extends PersonalDetails {
  constructor(eid) {
    super();
    this.eid = eid;
    this.salary = 5000000;
  }

  printData() {
    console.log(`Employee : ${this.name} 
    Employee ID :${this.eid} 
    Blood Group : ${this.blood} 
    Mobile Number : ${this.mobile} 
    Salary : ${this.salary}
    `);
  }
}

let printCls = new EmployeeDetails(101);
printCls.printData();
