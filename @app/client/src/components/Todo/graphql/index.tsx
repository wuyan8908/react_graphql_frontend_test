export const TodosQuery = `
  query {
    todos {
      id
      title
      complete
    }
  }
`;
export const AddTodosMutation = `
mutation AddTodo ($title: String!) {
    addTodo(title: $title) {
        id
        title
    } 
}
`;
export const CompleteTodosMutation = `
mutation completeTodo ($id: Int!) {
    completeTodo(id:$id){
        id
        title
        complete
    }
}
`;