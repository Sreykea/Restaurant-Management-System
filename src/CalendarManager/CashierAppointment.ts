import { Cashier } from "../Human/staff/Cashier";
import {Customer} from "../Human/customer/Customer";
import { DateTime } from "./DateTime";
import { Event, EventCategory } from "./Event";

export class CashierAppointment extends Event {
  constructor(
    category: EventCategory,
    start: DateTime,
    end: DateTime,
    private cashier: Cashier,
    private customer: Customer
  ) {
    super(category, start, end);
  }

//   getDoctor(): Cashier {
//     return this.doctor;
//   }
}

