import {Cashier} from '../human/staff/Cashier';
import {CashierAppointment} from './CashierAppointment';
import { Event } from './Event';
export class CalendarManager{

    public events:Event[]=[];

    addEvent(event:Event){
        this.events.push(event);
    }
    getAllApointement(cashier:Cashier): CashierAppointment[]{
        return [];
    }
    
   
}