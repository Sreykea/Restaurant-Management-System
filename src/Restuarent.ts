import {CalendarManager} from './CalendarManager/CalendarManager';
import { Order } from './Order/Order';
import {HumanManager} from './Human/HumanManager';


export class Restaurant {
    //Restaurant
    private address?: string;
    private name: string;

    //public service:
    public calendarManager: CalendarManager = new CalendarManager();
    public order: Order;
    public human: HumanManager = new HumanManager();

    constructor(address?: string, name: string) {
        this.address = address;
        this.name = name;
    }
}