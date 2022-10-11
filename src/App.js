import "./App.css";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("list")));
  }, []);

  const todoAdd = () => {
    let list = todoList ? todoList : [];
    list.push(inputValue);
    setTodoList(list);
    setInputValue("");
    localStorage.setItem("list", JSON.stringify(list));
  };
  const removeFromList = (todo) => {
    let list = todoList;
    let index = todoList.indexOf(todo);
    list.splice(index, 1);
    setTodoList([...list]);
    setInputValue("");
    localStorage.setItem("list", JSON.stringify(list));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo APP</h1>

        <Box sx={{ width: "30%" }}>
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Todo Name"
              variant="outlined"
              value={inputValue}
              fullWidth={true}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Button
              variant="contained"
              color="success"
              onClick={() => todoAdd()}
            >
              Add
            </Button>
          </Stack>

          <Stack spacing={2}>
            {todoList &&
              todoList.map((todo) => {
                return (
                  <Item>
                    {todo}
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => removeFromList(todo)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Item>
                );
              })}
          </Stack>
        </Box>
      </header>
    </div>
  );
}

export default App;
