

export enum EventCategory{
    Cashier_Appointment,
}
export abstract class Event{
    constructor(
        protected category: EventCategory,
        protected start: Date,
        protected end: Date
    ){}

   getCategory(){
    return this.category;
   }

    contains(date: Date): boolean{
        return (
            this.start.getTime() > date.getTime() &&
            this.end.getTime() < date.getTime()
        )
    }
}