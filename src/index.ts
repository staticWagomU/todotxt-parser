/**
 * todotxt-parser
 *
 * A pure TypeScript parser for todo.txt format.
 *
 * @packageDocumentation
 * @see https://github.com/todotxt/todo.txt
 */

export {
	appendTaskToFile,
	deleteTaskAtLine,
	parseTodoLine,
	parseTodoTxt,
	serializeTodo,
	updateTaskAtLine,
	updateTodoInList,
} from "./parser";
export type { Todo } from "./types";
