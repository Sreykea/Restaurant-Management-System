import {Food } from "../../../medical/Food";
import { Drink} from "../../../medical/Drink";
import { Person, Gender } from "../Person";


export class Customer extends Person{
    private food:Food[]= [];
    private drink:Drink[]= [];
    customer:Customer[];

    constructor(name:string, age:number, gender:Gender) {
        super(name, age, gender);
    }
    addFood(food: Food){
        return this.food.push(food);
    }
    getNameCustomer() {
        return this.customer;
    }
    addDrinks(drink: Drink){
        return this.drink.push(drink);
    }
    
}