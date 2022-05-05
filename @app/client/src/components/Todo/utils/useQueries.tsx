import { useQuery, useMutation } from "urql";
import {TodosQuery, AddTodosMutation , CompleteTodosMutation} from "../graphql";
const useQueries = () => {
    const [result, reexecute] = useQuery({
        query: TodosQuery,
      });
    const [, addTodo] = useMutation(AddTodosMutation);
    const [, completeTodo] = useMutation(CompleteTodosMutation);
    return { addTodo, completeTodo, reexecute, result };
}

export default useQueries;