interface Board {
  columns: map<TypedColumn, Todo>;
}

type TypedColumn = "todo" | "inProgress" | "underReview" | "finished";

type Priority = "Low" | "Medium" | "Urgent";

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo {
  id: string;
  title: string;
  description: string;
  status: TypedColumn;
  priority: Priority;
  createdAt: string;
  updatedAt: string;
}
