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
import { Drink } from "../medical/Drink";


///////================name of restaurant======================

let restaurant = new Restaurant('PNCRestaurant', '12 street PNC');



///========================customer name======================

let heng = new Customer('heng', 23, Gender.male);
let sreyKea = new Customer('sreykea', 21, Gender.female);
let ronan = new Customer('Ronan', 18, Gender.male);
let rady = new Customer('Rady', 30, Gender.male);
restaurant.human.getCustomer(heng);
restaurant.human.getCustomer(sreyKea);
restaurant.human.getCustomer(ronan);
restaurant.human.getCustomer(rady);

///==============table in room id 2=====================

let table2 = new Table(2)
restaurant.human.getCustomer(heng);
restaurant.human.getCustomer(sreyKea);
table2.setCustomer(heng);
table2.setCustomer(sreyKea);

///==============table in room id 5=====================
let table5 = new Table(5)
restaurant.human.getCustomer(ronan);
restaurant.human.getCustomer(rady);
table5.setCustomer(ronan);
table5.setCustomer(rady);

///=======================food of the customer =================
let food1 = Food.Pizza;
heng.addFood(food1);
let food2 = Food.Fried;
sreyKea.addFood(food2);
let hengdrink = Drink.coffee;
heng.addDrinks(hengdrink);
let keadrink = Drink.beer;
sreyKea.addDrinks(keadrink);



////=================name fo cashier========================

let narongCashier = new Cashier('narongcashier', 25, Gender.male);
let chamWaiter = new Waiter('chamwaiter', 20, Gender.male);
restaurant.human.addStaff(narongCashier);
restaurant.human.addStaff(chamWaiter);


///=================day of customers order=================

let starttimes = new Date('11,5,2020, 10:00:00');
let endtimes = new Date('12, 5,2020, 12:00:00');

let hengEatOfTime = new CashierAppointment(
    EventCategory.Cashier_Appointment,
    starttimes, endtimes, narongCashier, sreyKea
)
restaurant.calendarManager.addEvent(hengEatOfTime);

////===========console.log result ===================

// console.log(restaurant);
// console.log(restaurant.human);
// console.log(hengEatOfTime);
// console.log(restaurant, table1);
