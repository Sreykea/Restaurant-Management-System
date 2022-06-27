
import { Customer } from "./customer/Customer";
import { Staff } from "./Staff/StaffCategory";

export class HumanManager {
  private customers: Customer[] = [];
  private staffs: Staff[] = [];

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  getCustomers() {
    return this.customers;
  }


}

