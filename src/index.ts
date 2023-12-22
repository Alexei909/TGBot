
// const string: string = '...........';
// const number: number = 123;
// let boolean: boolean = true;
// boolean = false;
// const float: number = 4.2;

// const list: string[] = ['str'];
// const list2: Array<number> = [123, 123];

// const tuple: [string, number] = ['string', 12345];

// let variable: any = 42;
// variable = '42';

// function sayMyName(name: string): void {
//     console.log(name);
// }

// function throwError(name: string): never {
//     throw new Error(`${name}`);
// };

// // throwError('asdasd')

// type User = {
//     id: number,
//     name: string | number
// }

// const userr: User = {
//     id: 1,
//     name: 'false'
// }

// interface Rect {
//     readonly id: string,
//     color?: string,
//     size: {
//         width: number,
//         height: number
//     }
// }

// const rest: Rect = {
//     id: '123',
//     size: {
//         width: 10,
//         height: 20
//     }
// }

// const rect1 = {} as Rect;
// const rect2 = <Rect>{}

// interface RectArea extends Rect {
//     getArea: () => number;
// }

// const rect3: RectArea = {
//     id: '1234',
//     size: {
//         width: 20,
//         height: 20
//     },
//     getArea(): number {
//         return this.size.width * this.size.height
//     }
// }

// console.log(rect3.getArea())


// interface IClock {
//     time: Date,
//     setTime(date: Date): void
// }

// class Clock implements IClock {
//     time: Date = new Date();

//     setTime(date: Date): void {
//         this.time = date;
//     }
// }

// interface Styles {
//     [key: string]: string
// }

// const css: Styles = {
//     border: '1px',
//     margin: '2px',
//     123: '123'
// }


// enum MemberS {
//     Simple,
//     Standart,
//     Premium
// }

// const member = MemberS.Standart;
// console.log(member)

// const memb = MemberS[2];
// console.log(memb);

// enum SocialMedia {
//     VK = 'Vk',
//     FACEBOOK = 'Facebook'
// }

// const social = SocialMedia.VK;
// console.log(social)

// function addNumber(a: number, b: number): number {
//     return a + b;
// }

// interface Position {
//     x: number | undefined,
//     y: number | undefined
// }

// interface PositionD  extends Position {
//     default: string
// }

// function positionA(a: number, b: number): Position
// function positionA(a: number): PositionD
// function positionA(): Position 

// function positionA(a?: number, b?: number): Position | PositionD {
//     if(!a && !b) {
//         return {x: undefined, y: undefined}
//     }

//     if(a && !b) {
//         return {x: a, y: undefined, default: a.toString()}
//     }

//     return {x: a, y: b}
// }

// console.log(positionA())
// console.log(positionA(1))
// console.log(positionA(1, 2))

// function aaaa<T>(a: T, b: T): T[] {
//     return [a, b]
// }


// if (!false) console.log(false);

// const map: Map<string, number> = new Map();

// for (let i = 0; i < 10; i++) {

// }


function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0]
    let prefix: string = strs[0];
    let ans: string = '';
    
    for (let i = 0; i < prefix.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (prefix[i] === strs[j][i]) {
                if (j === strs.length - 1) ans += prefix[i];
            } else {
                break;
            }
        }
    }
    
    return ans;
};


