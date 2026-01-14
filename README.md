# @staticwagomU/todotxt-parser

A pure TypeScript parser for [todo.txt](https://github.com/todotxt/todo.txt) format.

## Installation

```bash
npm install @staticwagomU/todotxt-parser
# or
pnpm add @staticwagomU/todotxt-parser
```

## Usage

### Parsing

```typescript
import { parseTodoTxt, parseTodoLine } from "@staticwagomU/todotxt-parser";

// Parse multiple lines
const todos = parseTodoTxt(`(A) 2024-01-01 Call Mom +Family @phone
x 2024-01-02 Buy milk +shopping`);

// Parse a single line
const todo = parseTodoLine("(A) 2024-01-01 Call Mom +Family @phone due:2024-01-15");
// {
//   completed: false,
//   priority: "A",
//   creationDate: "2024-01-01",
//   description: "Call Mom +Family @phone due:2024-01-15",
//   projects: ["Family"],
//   contexts: ["phone"],
//   tags: { due: "2024-01-15" },
//   raw: "(A) 2024-01-01 Call Mom +Family @phone due:2024-01-15"
// }
```

### Serializing

```typescript
import { serializeTodo } from "@staticwagomU/todotxt-parser";
import type { Todo } from "@staticwagomU/todotxt-parser";

const todo: Todo = {
  completed: true,
  completionDate: "2024-01-15",
  creationDate: "2024-01-01",
  description: "Buy milk +shopping",
  projects: ["shopping"],
  contexts: [],
  tags: {},
  raw: ""
};

const line = serializeTodo(todo);
// "x 2024-01-15 2024-01-01 Buy milk +shopping"
```

### File Operations

```typescript
import {
  appendTaskToFile,
  updateTaskAtLine,
  deleteTaskAtLine,
} from "@staticwagomU/todotxt-parser";

// Append a new task
const newContent = appendTaskToFile(existingContent, newTodo);

// Update a task at specific line
const updated = updateTaskAtLine(content, lineIndex, updatedTodo);

// Delete a task at specific line
const deleted = deleteTaskAtLine(content, lineIndex);
```

## API

### Types

#### `Todo`

```typescript
interface Todo {
  completed: boolean;
  priority?: string;        // A-Z
  completionDate?: string;  // YYYY-MM-DD
  creationDate?: string;    // YYYY-MM-DD
  description: string;
  projects: string[];       // +project
  contexts: string[];       // @context
  tags: Record<string, string>; // key:value
  raw: string;
}
```

### Functions

| Function | Description |
|----------|-------------|
| `parseTodoTxt(text)` | Parse multi-line todo.txt content |
| `parseTodoLine(line)` | Parse a single todo.txt line |
| `serializeTodo(todo)` | Convert Todo to todo.txt format |
| `appendTaskToFile(content, todo)` | Append a task to file content |
| `updateTaskAtLine(content, index, todo)` | Update task at specific line |
| `updateTodoInList(todos, index, todo)` | Update todo in array and serialize |
| `deleteTaskAtLine(content, index)` | Delete task at specific line |

## todo.txt Format

```
[x] [(A)] [YYYY-MM-DD] [YYYY-MM-DD] <description> [+project] [@context] [key:value]
 ↑    ↑        ↑            ↑           ↑           ↑          ↑         ↑
完了  優先度  完了日      作成日      説明文     プロジェクト コンテキスト タグ
```

- **Completion**: `x ` at line start marks complete
- **Priority**: `(A)` - `(Z)` uppercase letter
- **Dates**: `YYYY-MM-DD` format
- **Project**: `+` followed by non-whitespace
- **Context**: `@` followed by non-whitespace
- **Tags**: `key:value` format

## License

MIT
