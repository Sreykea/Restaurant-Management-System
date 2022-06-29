import { Gender } from "../Person";
import {Staff, StaffCategory} from "./Staff";

export class Waiter extends Staff{
    constructor(name: string, age: number, gender: Gender){
        super(StaffCategory.Waiter, name, age, gender);
    }
}