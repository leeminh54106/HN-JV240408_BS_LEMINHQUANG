import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ShowList from "./components/ShowList";
import { Modal } from "antd";
import "antd/dist/reset.css";
function App() {
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("songoku")) || []
  );
  const [edit, setEdit] = useState(null);
  const index = useRef();
  //thêm công việc
  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      task: e.target.todo.value,
      completed: false,
    };
    setTodo([newTodo, ...todo]);
    e.target.todo.value = "";
  };

  //hàm xử lý đã hòan thành
  const handleCompleted = (id) => {
    const indexCompleted = todo.findIndex((item) => item.id === id);
    const newTodo = [...todo];
    newTodo[indexCompleted].completed = !newTodo[indexCompleted].completed;
    setTodo(newTodo);
  };

  //hàm xóa todo
  const handleDelete = (id) => {
    const indexDelete = todo.findIndex((item) => item.id === id);
    Modal.confirm({
      title: "Xác nhận",
      content: `Bạn có xác nhận xóa công việc ${todo[indexDelete].task} không?`,
      okText: "Xóa",
      cancelText: "Hủy",
      onOk: () => {
        // Thực hiện xóa sản phẩm khi người dùng xác nhận

        if (indexDelete !== -1) {
          const newTodo = [...todo];
          newTodo.splice(indexDelete, 1);
          setTodo(newTodo);
        }
      },
      onCancel: () => {
        // Nếu người dùng hủy, không làm gì cả
        console.log("Xóa sản phẩm bị hủy");
      },
    });
  };

  //hàm chuyển todo lên input để sửa
  const handleView = (id) => {
    const indexView = todo.findIndex((item) => item.id === id);
    index.current = indexView;
    setEdit(todo[indexView]);
  };

  //hàm update
  const handleUpdate = (e) => {
    e.preventDefault();
    const newTodo = [...todo];
    newTodo[index.current] = {
      ...newTodo[index.current],
      task: e.target.todo.value,
    };
    setTodo(newTodo);
    setEdit(null);
    e.target.todo.value = "";
  };
  useEffect(() => {
    localStorage.setItem("songoku", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <div id="root">
        <div className="flex justify-center items-center mt-[10%]">
          <div className="border rounded-md shadow-md py-5 px-20 min-w-[60%]">
            <h3 className="text-center font-bold text-xl py-6">
              Danh sách công việc
            </h3>

            <TodoList
              handleAdd={handleAdd}
              edit={edit}
              handleUpdate={handleUpdate}
            />
            <ShowList
              todo={todo}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
              handleView={handleView}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
