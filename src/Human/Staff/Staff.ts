import { Gender, Person } from "../Person";

export enum StaffCategory {
    Cashier = "CASHIER",
    Waiter = "WAITER",
    salary = "SALARY",
}
//staff is a person of the restaurant with a salary

export class Staff  extends Person {
    protected salary: number = 0; //default////////////////////////////////
    constructor(protected category: StaffCategory, name: string, age: number, gender: Gender){
        super(name, age, gender);
    }
    setSalary(salary: number){
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
    getCategory(){
        return this.category;
    }
}