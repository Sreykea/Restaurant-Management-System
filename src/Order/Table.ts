import { Customer } from '../Human/customer/Customer';


export class Table {
  private customer: Customer[] = [];

  constructor(private id: number) {}

  setCustomer(customer: Customer) {
    return this.customer.push(customer);
  }

  hasCustomer() {
    return this.customer !== undefined;
  }

  getCustomer() {
    return this.customer;
  }
}
