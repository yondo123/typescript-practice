// 원시타입
const isTrue:true = true;

// Boolean
let flag: boolean = true;

// String
const text: string = 'hello TypeScript!';

// Number
const num: number = 7;

// Array
const arr: Array<number> = [1, 2, 3];

// Array 리터럴
const fruits: string[] = ['🍎', '🍌', '🍓'];

// Tuple
const me: [string, number] = ['yondo123', 27];

// Object
const game: object = {
    title: 'FIFA22',
    price: 640000
};

//Non-null assertion operator
let canBeNull:number;
console.log(canBeNull!);

// Function
//(arg1: type, arg2: type..) :return type
function sum(a: number, b: number): number {
    return a + b;
}

// void
function logger(message: string): void {
    console.log(`[LOG]: ${message}`);
}
