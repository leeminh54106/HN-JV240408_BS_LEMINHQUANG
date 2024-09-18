import { React, useEffect, useState } from "react";

export default function TodoList({ handleAdd, edit, handleUpdate }) {
  const [task, setTask] = useState("");
  useEffect(() => {
    if (edit) {
      setTask(edit.task);
    }
  }, [edit]);

  return (
    <>
      {edit ? (
        <form className="flex gap-4" onSubmit={handleUpdate}>
          <input
            placeholder="Nhập tên công việc"
            type="text"
            className="focus:border-blue-700 hover:shadow-md h-9 border outline-none px-4 rounded flex-1"
            defaultValue=""
            name="todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="h-9 rounded px-4 border bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white"
          >
            Cập Nhật
          </button>
        </form>
      ) : (
        <form className="flex gap-4" onSubmit={handleAdd}>
          <input
            placeholder="Nhập tên công việc"
            type="text"
            className="focus:border-blue-700 hover:shadow-md h-9 border outline-none px-4 rounded flex-1"
            defaultValue=""
            name="todo"
          />
          <button
            type="submit"
            className="h-9 rounded px-4 border bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white"
          >
            Thêm
          </button>
        </form>
      )}
    </>
  );
}
