import axios from "axios";
export default async function getTasksByGroupedColumns(UserId: string | null) {
  if (UserId == null) return;
  const params = {
    id: UserId,
  };
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tasks`;
  let config = {
    method: "get",
    params: params,
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await axios.get(url, config);
    // console.log(response.data);

    const tasks = response.data.data;

    // creating a columns map
    const columns = tasks.reduce(
      (
        acc: {
          get: (arg0: any) => any;
          set: (arg0: any, arg1: { id: any; todos: never[] }) => void;
        },
        todo: {
          status: any;
          _id: any;
          title: any;
          description: any;
          priority: any;
          createdAt: any;
          updatedAt: any;
        }
      ) => {
        // In first iteration we will have a empty map
        if (!acc.get(todo.status)) {
          // if that particular key is not present we will create that key
          acc.set(todo.status, {
            id: todo.status,
            todos: [],
          });
        }

        acc.get(todo.status)!.todos.push({
          id: todo._id,
          title: todo.title,
          description: todo.description,
          status: todo.status,
          priority: todo.priority,
          createdAt: todo.createdAt,
          updatedAt: todo.updatedAt,
        });

        return acc;
      },
      new Map<TypedColumn, Todo>()
    );

    // if column doesn't have either of todo , inProgress , underReview , finished then we add them
    const columnTypes: TypedColumn[] = [
      "todo",
      "inProgress",
      "underReview",
      "finished",
    ];

    for (const columnType of columnTypes) {
      if (!columns.get(columnType)) {
        columns.set(columnType, {
          id: columnType,
          todos: [],
        });
      }
    }

    // sorting them in a particular order
    const sortedColumns = new Map(
      [...columns.entries()].sort(
        (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
      )
    );

    const board: Board = {
      columns: sortedColumns,
    };

    return board;
  } catch (error) {
    console.log(error);
  }
}
