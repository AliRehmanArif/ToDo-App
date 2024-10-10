import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Navbar = () => {
  function handleDelete() {
    alert("Your Todo deleted successfully!");
  }

  function handleCreate() {
    alert("Your Todo created successfully!");
  }

  function handleComplte() {
    alert("Your Todo completed successfully!");
  }

  return (
    <div className="flex flex-col  p-24 bg-gray-100">
      <div className="flex justify-center items-center text-#28c76f] text-5xl font-bold  pb-16">
        <h1>TODO List</h1>
      </div>
      <div className="flex flex-row border-[1px] rounded-md w-full">
        <input
          type="text"
          placeholder="Enter new ToDo..."
          className="bg-transparent w-full p-4 focus:outline-none"
        />
        <button
          className="bg-black text-#28c76f] p-4 border-[1px] font-bold rounded-md hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none"
          onClick={handleCreate}
        >
          Add
        </button>
      </div>
      <div className="text-xl pt-8 pb-2 font-bold flex justify-start">
        <h1>Your ToDo's</h1>
      </div>
      <p className="text-xl py-2 flex justify-end">There are 5 todo's</p>
      <div className="border rounded-md shadow-lg">
        <div className="flex justify-between items-center border-b-[1px] pr-2">
          <p className="p-4">Task</p>
          <div className="flex items-center space-x-8">
            <p>Actions</p>
            <p className="pr-5">Status</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-[1px] pr-2">
          <p className="p-4">Break Fast</p>
          <div className="flex items-center space-x-4">
            <MdEdit className="text-xl hover:scale-110 duration-300" />
            <MdDelete
              className="text-xl cursor-pointer hover:scale-110 hover:duration-300"
              onClick={handleDelete}
            />
            <div className="flex items-center">
              <button
                className="text-[12px]  py- px-2 bg-[#ddf6e8] text-[#28c76f] border rounded-md hover:scale-110 duration-300"
                onClick={handleComplte}
              >
                Active
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center pr-2 border-b-[1px] ">
          <p className="p-4">Go to Office</p>
          <div className="flex items-center space-x-4 pr-2">
            <MdEdit className="text-xl hover:scale-110 duration-300" />
            <MdDelete
              className="text-xl cursor-pointer hover:scale-110 hover:duration-300"
              onClick={handleDelete}
            />
            <div className="flex items-center">
              <button
                className="text-[12px]  py- px-2 bg-[#fff0e1] text-[#ffa045] border rounded-md hover:scale-110 duration-300"
                onClick={handleComplte}
              >
                Pending
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center pr-2 border-b-[1px] ">
          <p className="p-4">Lunch Time Fast</p>
          <div className="flex items-center space-x-4 pr-3">
            <MdEdit className="text-xl hover:scale-110 duration-300" />
            <MdDelete
              className="text-xl cursor-pointer hover:scale-110 hover:duration-300"
              onClick={handleDelete}
            />
            <button
              className="text-[12px]  py- px-2 bg-[#ddf6e8] text-[#28c76f] border rounded-md hover:scale-110 duration-300"
              onClick={handleComplte}
            >
              Active
            </button>
          </div>
        </div>
        <div className="flex justify-between  items-center border-b-[1px] pr-2">
          <p className="p-4">Offer Prayer</p>

          <div className="flex items-center space-x-4 pr-3">
            <MdEdit className="text-xl hover:scale-110 duration-300" />
            <MdDelete
              className="text-xl cursor-pointer hover:scale-110 hover:duration-300"
              onClick={handleDelete}
            />
            <button
              className="text-[12px]  py- px-2 bg-[#fff0e1] text-[#ffa045] border rounded-md hover:scale-110 duration-300"
              onClick={handleComplte}
            >
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between  items-center pr-2">
          <p className="p-4">Gym Time</p>
          <div className="flex items-center space-x-4 pr-3">
            <MdEdit className="text-xl hover:scale-110 duration-300" />
            <MdDelete
              className="text-xl cursor-pointer hover:scale-110 hover:duration-300 "
              onClick={handleDelete}
            />
            <button
              className="text-[12px]  py- px-2 bg-[#ddf6e8] text-[#28c76f] border rounded-md hover:scale-110 duration-300"
              onClick={handleComplte}
            >
              Active
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
