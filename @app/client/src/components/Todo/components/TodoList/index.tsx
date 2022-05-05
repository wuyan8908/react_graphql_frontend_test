import React from "react";
import {
  Text,
  UnorderedList,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { CompletedTodo } from "./toDoListStyle";
export const TodoList = (props: { data: any; completeTodo: any; reexecute: any; }) => {
  const { data, completeTodo,reexecute } = props;
  const onTodoClick = (todiId: any) => {
  completeTodo({id:parseInt(todiId)}).then(() => {
      reexecute();
  })
  }
  return (
    <Box>
      <UnorderedList
        width={300}
        border="2px solid"
        p={2}
        data-test-id="todo-list"
      >
        {data?.todos.map((todo: any) => (
          <ListItem key={todo.id} data-test-id="todo-item" onClick={() => onTodoClick(todo.id)}>
            {todo.complete?(
              <CompletedTodo> {todo.title}</CompletedTodo>
            ):(
              <p>{todo.title}</p>
            )}
          </ListItem>
        ))}
        {!data?.todos && <Text>No todos yet.</Text>}
      </UnorderedList>
    </Box>
  );
}
