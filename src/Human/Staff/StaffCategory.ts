import { Gender, Person } from "../Person";
export enum  StaffCategory{
    cashier = "Cashier",
    waiter = "Waiter",
    salary = "Salary",

}
export abstract class Staff  extends Person {
    protected salary: number = 0;
    constructor(id:number, name: string, age: number) {
        super(id,name, age);
    }
    setSalary(salary: number) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}