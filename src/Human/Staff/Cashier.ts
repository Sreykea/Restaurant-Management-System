import { Food } from "../../../medical/Food";
import { Gender, Person } from "../Person";
import {Staff, StaffCategory } from "./Staff"
export class Cashier extends Staff{
    private specaility:Food[] = [];

    constructor(name:string, age:number, gender:Gender) {
        super(StaffCategory.Cashier, name, age, gender)
    }
    hasSpeciality(): boolean {
        return this.specaility !== undefined;
    }
    setSpecaility(specaility:Food) {
        this.specaility.push(specaility);
    }
   


}