import { Cashier } from "../Human/staff/Cashier";
import {Customer} from "../Human/customer/Customer";
import { Event, EventCategory } from "./Event";

export class CashierAppointment extends Event {
  constructor(
    category: EventCategory,
    start: Date,
    end: Date,
    private cashier: Cashier,
    private customer: Customer,
  ) {
    super(category, start, end);
  }

  getCashier() {
    return this.cashier;
  }
  getStart(){
      return this.start;
  }
  getEnd() {
    return this.end;
  }
}

