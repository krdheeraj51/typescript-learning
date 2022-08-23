// Code goes here!
class Department {
  //  private name: string;
  protected employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  describe(this: Department) {
    console.log(`Department : ${this.id} -> ${this.name}`);
  }
  addEmployees(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const accounting = new Department("d1", "Accounting");
accounting.addEmployees("Mannu");
accounting.addEmployees("Millan");
// accounting.employees[2]='Manish';
accounting.printEmployeeInformation();
console.log(accounting);
const accoutingCopy = { name: "Dheeraj", describe: accounting.describe };
accounting.describe();

// accoutingCopy.describe();

// ITDepartment

let itDepartment = new ITDepartment("id", ["max"]);

itDepartment.addEmployees("Mannu");
itDepartment.addEmployees("Millan");
// accounting.employees[2]='Manish';
itDepartment.printEmployeeInformation();

console.log(itDepartment);

class AccountingDepartment extends Department {
  private lastReport: string;
  get mostRecentReport() {
    console.log("last Repot ", this.lastReport);
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    console.log("reports ::", reports);
    this.lastReport = reports[0];
  }
  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
  addEmployees(name: string) {
    if (name !== "Max") return;
    this.employees.push(name);
  }
}

const accountingDepart = new AccountingDepartment("d2", []);
accountingDepart.mostRecentReport = "Here is report available";
accountingDepart.addReports("Something went wrong");
console.log(accountingDepart.mostRecentReport);

// accountingDepart.printReports();

// accountingDepart.addEmployees("divya");

console.log(accountingDepart.mostRecentReport);

const employee1= Department.createEmployee('Max');

console.log(employee1)
