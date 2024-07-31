"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";
import { timeAgo } from "@/utils/timeAgo";
type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

const chipColor = {
  Low: "bg-low",
  Medium: "bg-medium",
  Urgent: "bg-urgent",
};

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  return (
    <div
      className="bg-main rounded-md todo-border mt-5 mb-5 p-3"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <h1 className="barlow-semibold text-gray-500 text-base xl:text-base mb-2">
        {todo.title}
      </h1>
      <p className="text- xl:text-base barlow-regular text-gray-500 mb-2">
        {todo.description}
      </p>
      <div
        className={`${
          chipColor[todo.priority]
        } rounded-lg max-w-[30%] xl:max-w-[25%] text-[0.65rem] xl:text-xs text-center mt-2 mb-2 text-[#FFFFFF] py-1 xl:py-2 barlow-light`}
      >
        {todo.priority}
      </div>
      <div className="flex items-center mt-3">
        <ClockIcon className=" w-5 h-5 xl:h-7 xl:w-7 text-gray-500" />
        <span className="ml-3 text-gray-500 text-sm xl:text-base">
          {todo.deadline || "2024-07-30"}
        </span>
      </div>
      <div className="mt-2 text-gray-500 text-xs xl:text:sm barlow-medium">
        {timeAgo(todo.updatedAt)}
      </div>
    </div>
  );
}

export default TodoCard;
