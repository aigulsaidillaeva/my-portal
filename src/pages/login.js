import React, { useState, useEffect } from "react";
import { useHistory } from "@docusaurus/router";
import styled from "styled-components";



export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
const BASE = "/doc";
const goTo = (path) => `${BASE}${path}`;

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
   history.push(goTo("/admin-dashboard"));

    }
  }, [history]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin_token", "valid_token");
    history.push(goTo("/admin-dashboard"));

    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Вход в админ-панель</Title>

     
        <Input
          type="text"
          placeholder="Введите логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

       
        <Input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Войти</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginForm>
    </LoginContainer>
  );
}

// Стили для контейнера
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
`;

// Стили для формы
const LoginForm = styled.form`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

// Стили для заголовка
const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

// Стили для инпута
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

// Стили для кнопки
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color:#5096f1;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color:rgb(44, 163, 231);
  }
`;

// Стили для ошибки
const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;