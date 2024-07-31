"use client";
import { FC, useState } from "react";
import { useDrawerStore } from "@/store/DrawerStore";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "@/store/authStore";
import { useUserStore } from "@/store/userStore";
import { addTask } from "@/lib/addTask";
import { useBoardStore } from "@/store/BoardStore";
import Board from "./Board";
// import { XIcon } from "@heroicons/react/24/outline";

const Drawer: FC = () => {
  const { isOpen, closeDrawer } = useDrawerStore();
  const { token } = useAuthStore();
  const { userId } = useUserStore();
  const [board, setBoardState] = useBoardStore((state) => [
    state.board,
    state.setBoardState,
  ]);
  const [newTodoData, setNewTodoData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    deadline: "",
    userId: userId,
  });

  // const obj = {
  //     createdAt: "2024-07-30T23:32:39.345Z";
  //     deadline: "2024-07-16";
  //     description: "something";
  //     priority: "Medium";
  //     status: "inProgress";
  //     title: "ReactTutorial";
  //     updatedAt: "2024-07-30T23:32:39.345Z";
  // }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setNewTodoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTask = async (e: { preventDefault: () => void }) => {
    const response = await addTask(token, newTodoData);
    const addedTask: Todo = {
      id: response._id,
      createdAt: response.createdAt,
      deadline: response.deadline,
      description: response.description,
      priority: response.priority,
      status: response.status,
      title: response.title,
      updatedAt: response.updatedAt,
    };
    // update the state of the board
    const newColumns = new Map(board.columns);
    const columnToUpdate: Column = newColumns.get(response.status) as Column;
    columnToUpdate.todos.push(addedTask);
    console.log(columnToUpdate);
    newColumns.set(response.status, columnToUpdate);
    setBoardState({ ...board, columns: newColumns });
  };

  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      <div
        className="absolute inset-0 bg-gray-600 bg-opacity-75"
        onClick={closeDrawer}
      ></div>
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 xl:1/3 bg-white p-4 shadow-lg">
        {/* Top bar of the Drawer */}
        <div className="flex justify-between">
          <div className="flex">
            <button onClick={closeDrawer}>
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
            <button>
              <ArrowsPointingOutIcon className="w-5 h-5 text-gray-500 ml-3" />
            </button>
          </div>
          <div className="flex">
            <button className="btn">
              Share
              <span>
                <ShareIcon className="w-5 h-5" />
              </span>
            </button>
            <button className="btn ml-5">
              Favorite
              <span>
                <StarIcon className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 pl-3">
          {/* Your drawer content goes here */}
          <div className="pb-5">
            <input
              type="text"
              name="title"
              value={newTodoData.title}
              onChange={handleChange}
              placeholder="Title"
              className="input p-0 input-bordered text-4xl text-bold w-full max-w-xs placeholder-gray-400 text-black focus:outline-none"
              style={{ border: "none" }}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex mr-10 items-center text-gray-500">
              <SunIcon className="w-8 h-8 text-gray-500" />
              <span className="ml-3 text-lg">Status</span>
            </div>
            <div className="mr-32">
              <select
                name="status"
                value={newTodoData.status}
                onChange={handleChange}
                className="select select-bordered w-full text-gray-500 text-lg placeholder-gray-300 focus:outline-none"
                style={{ border: "none" }}
              >
                <option value="" disabled>
                  Not Selected
                </option>
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="underReview">Under Review</option>
                <option value="finished">Finished</option>
              </select>
            </div>
          </div>
          <div className="flex mt-3 justify-between">
            <div className="flex items-center text-gray-500">
              <ExclamationTriangleIcon className="w-7 h-7 text-gray-500" />
              <span className="ml-4 text-lg">Priority</span>
            </div>
            <div className="mr-32">
              <select
                name="priority"
                value={newTodoData.priority}
                onChange={handleChange}
                className="select select-bordered w-full text-gray-500 text-lg placeholder-gray-300 focus:outline-none"
                style={{ border: "none" }}
              >
                <option value="" disabled>
                  Not Selected
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
          </div>
          <div className="flex mt-3 justify-between">
            <div className="flex items-center text-gray-500">
              <CalendarIcon className="w-7 h-7 text-gray-500" />
              <span className="ml-4 text-lg">Deadline</span>
            </div>
            <div className="mr-28">
              <input
                type="date"
                name="deadline"
                value={newTodoData.deadline}
                onChange={handleChange}
                className="input input-bordered w-full text-gray-500 placeholder-gray-300 text-lg focus:outline-none"
                style={{ border: "none" }}
              />
            </div>
          </div>
          <div className="flex mt-3 justify-between">
            <div className="flex items-center text-gray-500">
              <PencilIcon className="w-6 h-6 text-gray-500" />
              <span className="ml-4 text-lg">Description</span>
            </div>
            <div className="mr-7">
              <input
                name="description"
                value={newTodoData.description}
                onChange={handleChange}
                placeholder="Not Selected"
                className="textarea textarea-bordered w-full text-gray-500 text-lg placeholder-gray-300 focus:outline-none"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 mr-10">
          <button onClick={handleAddTask} className="btn w-full">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
