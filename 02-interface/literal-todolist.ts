const todoList: Array<{ id: number; name: string; complete: boolean }> = [];
let number: number = 0;

createTodoItem('밥 먹기');
completeTodoItem(number);
console.log(todoList);

//할 일 생성
function createTodoItem(name: string): { id: number; name: string; complete: boolean } {
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
