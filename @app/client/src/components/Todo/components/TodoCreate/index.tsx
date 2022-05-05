import React, { useState } from "react";
import {
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";

export const TodoCreate = (props: { reexecute: any; addTodo: any; }) => {
  const { reexecute,addTodo } = props;
  const [todoField, setTodoField] = useState("");
  const createTodo = () => {
    addTodo({ title: todoField }).then(() => {
      setTodoField("");
      reexecute();
    });
  };
  return (
    <HStack>
      <Input
        type="text"
        value={todoField}
        onChange={(e) => setTodoField(e.currentTarget.value)}
        width={200}
        data-test-id="new-todo"
      />
      <Button onClick={createTodo} data-test-id="create-button">
        Create Todo
      </Button>
    </HStack>
  );
}
