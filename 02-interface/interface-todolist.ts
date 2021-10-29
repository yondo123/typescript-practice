//use interface
interface todoItem {
    id: number;
    name: string;
    complete: boolean;
}

const todoList: Array<todoItem> = [];
let number: number = 0;

createTodoItem('공부하기');
completeTodoItem(number);
console.log(todoList);

//할 일 생성(Interface 사용)
function createTodoItem(name: string): todoItem {
    const item = {
        id: number++,
        name: name,
        complete: false
    };

    todoList.push(item);
    return item;
}

//할 일 완료
function completeTodoItem(id: number): void {
    const index = number - 1;
    const tempItem = todoList[index];
    tempItem.complete = true;
    todoList.splice(index, 1, tempItem);
}
