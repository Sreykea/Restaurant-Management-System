export enum Gender {
    male = "Male",
    female = "Female",
}
//=================person in the restaurant======================

export abstract class Person {
    protected phone?: number;
    constructor(protected name: string, protected age: number, protected gender: Gender) { }

}