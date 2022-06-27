export class DateTime {
    constructor(
        public date: number,
        public month: number,
        public year: number,
        public time: number
    ){}

    isEqual(other: DateTime): boolean {
        return (
            this.date === other.date &&
            this.month === other.month &&
            this.year === other.year &&
            this.time === other.time
        );
    }
}