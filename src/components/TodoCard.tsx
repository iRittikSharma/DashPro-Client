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
      <h1 className="barlow-semibold text-gray-500 text-base mb-2">
        {todo.title}
      </h1>
      <p className="text-base barlow-regular text-gray-500 mb-2">
        {todo.description}
      </p>
      <div
        className={`${
          chipColor[todo.priority]
        } rounded-lg max-w-[25%] text-xs text-center mt-2 mb-2 text-[#FFFFFF] py-2 barlow-light`}
      >
        {todo.priority}
      </div>
      <div className="flex items-center mt-3">
        <ClockIcon className="h-7 w-7 text-gray-500" />
        <span className="ml-3 text-gray-500 text-base">2024-08-15</span>
      </div>
      <div className="mt-2 text-gray-500 barlow-medium">
        {timeAgo(todo.updatedAt)}
      </div>
    </div>
  );
}

export default TodoCard;
