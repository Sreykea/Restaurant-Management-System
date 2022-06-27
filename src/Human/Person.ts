export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',

}

export abstract class Person{
    constructor(
        protected id: number,
        protected name: string,
        protected phone: number,
    ){}

    abstract setPhone(phone:number):void
}