/* 구현 소스는 02-interface\interface-todolist.ts 참조 */
type todoType = {
    id: number;
    name: string;
    complete: boolean;
};
type listType = Array<todoType>;
type numberType = number;

const aliasTodoList: listType = [];
let aliasNumber: numberType = 0;
