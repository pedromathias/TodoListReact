import { Button, Container, Flex, Input, Item, Spacer } from "./styles";

import { useState } from "react";
import { Trash, CheckSquare } from "phosphor-react";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) return alert("Preencha uma tarefa");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setListTask([...listTask, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Container>
      <h1 className="title">TODO LIST</h1>
      <Spacer />

      <Flex direction="row">
        <Input
          value={task}
          placeholder="Digite sua anotação"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Anotar</Button>
      </Flex>
      <Spacer margin="16px" />

      <ul>
        {listTask.map((task) => (
          <>
            <Item Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                <CheckSquare class="bx bx-check " size={20} />
                </button>
                <button onClick={() => removeTask(task.id)}>
                <Trash class="bx bx-trash " size={20} />
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;
