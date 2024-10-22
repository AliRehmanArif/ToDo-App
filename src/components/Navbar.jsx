import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [list, setList] = useState(getLocalItems());
  const [isEdit, setIsEdit] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);

  const addItems = () => {
    if (!inputData) {
      alert("Please enter a value");
    } else if (inputData && !toggleSubmit) {
      setList(
        list.map((item) => {
          if (item.id === isEdit) {
            return { ...item, name: inputData };
          }
          return item;
        })
      );
      setToggleSubmit(true);
    setInputData('');
    setIsEdit(null)
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setList([...list, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      const updatedItem = list.filter((item) => index !== item.id);
      setList(updatedItem);
    }
  };

  const editItem = (id) => {
    const findItem = list.find((item) => item.id === id);
    setToggleSubmit(false);
    setInputData(findItem.name);
    setIsEdit(id)
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(list));
  }, [list]);
  return (
    <div className="flex flex-col  p-24 bg-gray-100">
      <div className="flex justify-center items-center text-[#28c76f] text-5xl font-bold  pb-16">
        <h1>TODO List</h1>
      </div>
      <div className="flex flex-row border-[1px] rounded-md w-full">
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Enter new ToDo..."
          className="bg-transparent w-full p-4 focus:outline-none"
        />
        {toggleSubmit ? (
          <button
            type="submit"
            title="Add Item"
            className="bg-black text-[#28c76f] p-4 border-[1px] font-bold rounded-md hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none"
            onClick={addItems}
          >
            Add
          </button>
        ) : (
          <button
            type="submit"
            title="Add Item"
            className="bg-black text-[#28c76f] p-4 border-[1px] font-bold rounded-md hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none"
            onClick={addItems}
          >
            Save
          </button>
        )}
      </div>
      <div className="text-xl pt-8 pb-2 font-bold flex justify-start">
        <h1>Your ToDo's</h1>
      </div>
      <p className="text-xl py-2 flex justify-end">
        There are {list.length} todo's
      </p>
      <div className="border rounded-md shadow-lg">
        <div className="flex justify-between items-center border-b-[1px] pr-2">
          <p className="p-4">Task</p>
          <div className="flex items-center p-4">
            <p>Actions</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center ">
          {list.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center border-b-[1px] w-full pr-4"
              >
                <p className="p-4">{item.name}</p>
                <div className="flex items-center space-x-4">
                  <MdEdit
                    className="text-xl cursor-pointer hover:scale-110 duration-300"
                    onClick={() => editItem(item.id)}
                  />

                  <MdDelete
                    className="text-xl cursor-pointer hover:scale-110 hover:duration-300"
                    title="Delete Item"
                    onClick={() => deleteItem(item.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
