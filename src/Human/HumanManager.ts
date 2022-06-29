
import { Customer } from "./customer/Customer";
import { Staff, StaffCategory} from "./Staff/Staff";
import { Cashier } from "./Staff/Cashier";

export class HumanManager {
  private customers: Customer[] = [];
  private staffs: Staff[] = [];

  getCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  addStaff(staff: Staff) {
    return this.staffs.push(staff);
  }
 getStaffs() {
  return this.staffs;
 }
 getCashier():Cashier[]{
  let result:Cashier[] = [];
  for (let staff of this.staffs){
    if (staff.getCategory() == StaffCategory.Cashier){
      let cashier = staff as Cashier;
      result.push(cashier);
    }
  }
  return result;
 }

}

