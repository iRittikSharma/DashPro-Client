import { Draggable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const Column = ({ id, todos, index }: Props) => {
  return (
    <Draggable>
      {(provided) => (
        <div>{/* another nested deopable section for columns todo */}</div>
      )}
    </Draggable>
  );
};

export default Column;
