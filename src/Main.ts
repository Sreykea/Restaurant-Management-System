import { Restaurant } from './Restuarent';
import { Customer } from './human/Customer/Customer';
import { TableStatus } from './order/TableStatus';
import { Table } from './order/Table';
import { Gender } from './Human/Person';
import { Cashier } from "./human/Staff/Cashier";
import { Waiter } from "./human/Staff/Waiter";
import { CashierAppointment } from './CalendarManager/CashierAppointment';
import { EventCategory } from './CalendarManager/Event';
import { Food } from "../medical/Food";


///////================name of restaurant======================

let restaurant = new Restaurant('hengRestaurant', '12 street PNC');
let ronan = new Customer('Ronan', 18, Gender.female);
let rady = new Customer('Rady', 21, Gender.male);



///========================customer name======================

let heng = new Customer('heng', 23, Gender.male);
let sreyKea = new Customer('sreykea', 21, Gender.female);
restaurant.human.getCustomer(heng);
restaurant.human.getCustomer(sreyKea);

///==============table in room=====================

let table1 = new Table(5)
restaurant.human.getCustomer(ronan);
restaurant.human.getCustomer(rady);
table1.setCustomer(ronan);
table1.setCustomer(rady);

///=======================food of the customer =================
let food1 = Food.Pizza;
ronan.addFood(food1);
let food2 = Food.Fried;
rady.addFood(food2);
sreyKea.addFood(food2);
heng.addFood(food1);




////=================name fo cashier========================

let narongCashier = new Cashier('narongcashier', 25, Gender.male);
let chamWaiter = new Waiter('chamwaiter', 20, Gender.male);
restaurant.human.addStaff(narongCashier);
restaurant.human.addStaff(chamWaiter);


///=================day of customers order=================

let starttimes = new Date('11,5,2020, 10:00:00');
let endtimes = new Date('12, 5,2020, 12:00:00');

let hengAppointment = new CashierAppointment(
    EventCategory.Cashier_Appointment,
    starttimes, endtimes, narongCashier, sreyKea
)
restaurant.calendarManager.addEvent(hengAppointment);

////===========console.log result ===================

console.log(
    restaurant.human,
    hengAppointment);
