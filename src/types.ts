/**
 * Todo.txt data model
 *
 * Represents a single task in todo.txt format.
 *
 * @see https://github.com/todotxt/todo.txt
 */
export interface Todo {
	/** Whether the task is completed (marked with "x " at the start) */
	completed: boolean;
	/** Priority (A)-(Z) uppercase letter */
	priority?: string;
	/** Completion date in YYYY-MM-DD format (only for completed tasks) */
	completionDate?: string;
	/** Creation date in YYYY-MM-DD format */
	creationDate?: string;
	/** Task description (the main text content) */
	description: string;
	/** Project tags (+project) */
	projects: string[];
	/** Context tags (@context) */
	contexts: string[];
	/** Key-value tags (key:value format) */
	tags: Record<string, string>;
	/** Original raw line */
	raw: string;
}
