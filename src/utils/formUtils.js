export const AddTodoList = (items, newItemList) => {
     return([...items, newItemList]);
};

export const DeleteTodoItem = (items, id) => {
     return items.filter((i) => i.id !== id);
}

export const UpdateTodoItem = () => {

}