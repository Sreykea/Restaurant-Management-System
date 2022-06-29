import {CalendarManager} from './CalendarManager/CalendarManager';
import { TableStatus } from './Order/TableStatus';
import {HumanManager} from './Human/HumanManager';


export class Restaurant {
    //Restaurant
    private address?: string;
    private name: string;

    //public service:
    public calendarManager: CalendarManager = new CalendarManager();
    public order: TableStatus;
    public human: HumanManager = new HumanManager();

    constructor(name: string, address?: string) {
        this.name = name;
        this.address = address;
    
    }
}