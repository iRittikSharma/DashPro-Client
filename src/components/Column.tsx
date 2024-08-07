import { Draggable, Droppable } from "react-beautiful-dnd";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TodoCard from "./TodoCard";
import { useDrawerStore } from "@/store/DrawerStore";
type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inProgress: "In Porgress",
  underReview: "Under Review",
  finished: "Finished",
};

const Column = ({ id, todos, index }: Props) => {
  const { openDrawer } = useDrawerStore();
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* another nested deopable section for columns todo */}
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`pb-2 roundex-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white"
                }`}
              >
                <h2 className="flex justify-between items-center barlow-medium text-gray-500 px-5 py-3 text:lg xl:text-xl">
                  {idToColumnText[id]}
                  <span>
                    <Bars3BottomLeftIcon className="h-5 w-5 xl:h-7 xl:w-7 text-gray-500" />
                  </span>
                </h2>

                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(provided) => (
                        <TodoCard
                          todo={todo}
                          index={index}
                          id={id}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  <div className="mt-5">
                    <button
                      className="btn max-h-[30%] w-full text-[0.65rem] lg:text-xs xl:text-lg text-white bg-add-black"
                      onClick={openDrawer}
                    >
                      Create New Task
                      <PlusCircleIcon className="w-5 h-5 lg:w-6 lg:h-6 mr-2" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
