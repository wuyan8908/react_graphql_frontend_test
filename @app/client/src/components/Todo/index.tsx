import React from "react";
import useQueries from "./utils/useQueries";
import { TodoList } from "./components/TodoList";
import { TodoCreate } from "./components/TodoCreate";
import { VStack } from "@chakra-ui/react";

export const Todo = () => {
	const { addTodo, completeTodo, reexecute, result } = useQueries();
	const { data } = result;
	return (
		<VStack p={10} spacing={5} width='100%'>
			<TodoList data={data} completeTodo={completeTodo} reexecute={reexecute} />
			<TodoCreate reexecute={reexecute} addTodo={addTodo} />
		</VStack>
	)
}