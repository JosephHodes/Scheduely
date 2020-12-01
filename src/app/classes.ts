export interface Classes {
    weekday: string;
    classes: Array<string>;
}
export interface Test {
    name: string;
    value: number;
}
export interface Day {
    weekday: string;
    classes: Classes[];
}
export interface classes {
    name: string;
    teacher: string;
    start_time: string;
    duration: number;
    assignments: Assignments;
}
export interface Assignments {
    name: string;
    type: string;

}
export interface User {
  uid: string;
}
