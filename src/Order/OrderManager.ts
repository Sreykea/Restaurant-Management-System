import { Table } from "./Table";

export class OrderManager {
  public tables: Table[] = [];

  getNumberOfTables(): number {
    return this.tables.length;
  }

  addRoom(room: Table) {
    return this.tables.push(room);
  }

}
