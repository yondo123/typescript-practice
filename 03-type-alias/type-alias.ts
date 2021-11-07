//일반 타입
const id: string = 'sjchoi';

//타입 별칭
type idType = string;
const newId: idType = 'sjchoi';

//object 타입 별칭
type person = { name: string; age: number; favorite: string[] };
const person: person = {
    name: 'sjchoi',
    age: 27,
    favorite: ['learn programming, game']
};
