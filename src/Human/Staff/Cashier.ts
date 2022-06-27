import { Gender } from "../Person";
import {Food} from "../../../medical/Food";
import {Staff, StaffCategory} from './StaffCategory';


export class Cashier extends Staff{

    private speciality?:Food;
    private gender:Gender;
    protected category = StaffCategory.cashier;
    public phone: number;
    
    constructor(id:number, name:string, age:number,gender:Gender) {
        super(id,name,age);
        this.gender = gender;
    }
    setSpeciality(speciality:string) {  
        this.speciality = speciality;
    }
    setPhone(phone: number){
        this.phone = phone;
    }
}