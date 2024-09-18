import React from "react";

export default function ShowList({
  todo,
  handleCompleted,
  handleDelete,
  handleView,
}) {
  return (
    <>
      {todo.length !== 0 ? (
        <ul className="flex flex-col gap-3 mt-5 max-h-72 overflow-y-auto">
          {todo.map((item) => (
            <li
              key={item.id}
              className="flex px-2 rounded justify-between items-center hover:bg-gray-200 cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  onClick={() => handleCompleted(item.id)}
                  className="h-4 w-4 cursor-pointer"
                />
                {item.completed ? <s>{item.task}</s> : <span>{item.task}</span>}
              </div>
              <div className="flex gap-4">
                <i
                  onClick={() => handleView(item.id)}
                  className="fa-solid fa-pen cursor-pointer hover:bg-gray-300 p-2 rounded-full text-orange-500"
                />
                <i
                  onClick={() => handleDelete(item.id)}
                  className="fa-solid fa-trash cursor-pointer hover:bg-gray-300 p-2 rounded-full text-red-500"
                />
              </div>
            </li>
          ))}
          <div className="mt-3 bg-gray-100 p-2 rounded">
            Công việc đã hoàn thành: <b>{todo.filter(task => task.completed).length}</b>/ <b>{todo.length}</b>
          </div>
        </ul>
      ) : (
        <ul className="flex flex-col gap-3 mt-5 max-h-72 overflow-y-auto">
          <div className="py-4 text-center items-center flex flex-col">
            <img
              className="h-48 w-52 shadow-lg "
              src="https://t4.ftcdn.net/jpg/05/86/21/03/360_F_586210337_WOGOw0l7raEB8F61Muc4hWbvVcyQdk9Z.jpg"
              alt=""
            />
          </div>
        </ul>
      )}
    </>
  );
}
