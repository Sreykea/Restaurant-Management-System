
import { DateTime } from './DateTime';
import {CashierAppointment} from './CashierAppointment';
import { Event } from './Event';

export class CalendarManager{
    public events: Event[] = [];

    addEvent(event: Event){
        this.events.push(event);
    }


}

