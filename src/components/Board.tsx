"use client";
import { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useBoardStore } from "@/store/BoardStore";
import React from "react";
import Column from "./Column";
import { useUserStore } from "@/store/userStore";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { updateTask } from "@/lib/updateTask";

function Board() {
  const router = useRouter();
  const [board, getBoard, setBoardState] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoardState,
  ]);
  const { token } = useAuthStore();

  const { userId } = useUserStore();
  useEffect(() => {
    getBoard(userId);
  }, [getBoard, userId]);

  const handleOnDragEnd = async (result: DropResult) => {
    // what heppen when we let go drag and drop
    const { destination, source, type } = result;

    //  checking  is the user dragged outside of  the board
    if (!destination) return;

    // handle column drag
    if (type == "column") {
      const entries = [...board.columns.entries()];
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
    }

    const columns = Array.from(board.columns) as [TypedColumn, Column][];

    const startColIndex = columns[Number(source.droppableId)];
    const finishCoIndex = columns[Number(destination.droppableId)];
    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };

    const finishCol: Column = {
      id: finishCoIndex[0],
      todos: finishCoIndex[1].todos,
    };

    if (!startCol || !finishCol) return;

    // dropped at the same position
    if (source.index === destination.index && startCol == finishCol) return;

    //copy
    const newTodos = startCol.todos;
    const [todoMoved] = newTodos.splice(source.index, 1); // removed  the todo from the array of todos of selected column

    if (startCol.id == finishCol.id) {
      // we are draging in the same column
      newTodos.splice(destination.index, 0, todoMoved); // placing the selected todo at the destination index inn a array

      // new col object
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };

      // creting a copy of board
      const newColumns = new Map(board.columns);
      // changinng the corresponding value relative to key
      newColumns.set(startCol.id, newCol);

      setBoardState({ ...board, columns: newColumns });
    } else {
      // we are dragging to another column
      const finishTodos = Array.from(finishCol.todos);
      finishTodos.splice(destination.index, 0, todoMoved);

      // creting a copy of board
      const newColumns = new Map(board.columns);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
      // changinng the corresponding value relative to key
      newColumns.set(startCol.id, newCol);
      newColumns.set(finishCol.id, {
        id: finishCol.id,
        todos: finishTodos,
      });

      // Update in the DB
      if (!token) {
        router.push("/signin");
        return;
      }

      const isUpdated = await updateTask(
        todoMoved.id,
        { status: finishCol.id },
        token
      );
      if (!isUpdated) {
        alert("something went wrong");
        return;
      }
      setBoardState({ ...board, columns: newColumns });
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-5 place-content-evenly mx-auto "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {board &&
              [...board.columns.entries()].map(([id, column], index) => (
                <Column key={id} id={id} todos={column.todos} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
