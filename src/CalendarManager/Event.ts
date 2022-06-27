import { DateTime } from "./DateTime";

export enum EventCategory{
    Cashier_Appointment,
}

export abstract class Event{
    constructor(
        protected category: EventCategory,
        protected start: DateTime,
        protected end: DateTime
    ){}

    getStart(): DateTime {
         return this.start; 
    }

    getEnd(): DateTime {
        return this.end;
    }
}