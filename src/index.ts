/**
 * todotxt-parser
 *
 * A pure TypeScript parser for todo.txt format.
 *
 * @packageDocumentation
 * @see https://github.com/todotxt/todo.txt
 */

export type { Todo } from "./types";

export {
	parseTodoTxt,
	parseTodoLine,
	serializeTodo,
	updateTodoInList,
	appendTaskToFile,
	updateTaskAtLine,
	deleteTaskAtLine,
} from "./parser";
