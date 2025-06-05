import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import axios from "axios";

export default function AdminQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://a9953b31be7a3b6f.mokky.dev/questions"
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке вопросов:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout title="Вопросы от пользователей">
      <div className="container margin-vert--lg">
        <h1>Вопросы от пользователей</h1>
        {questions.length === 0 ? (
          <p>Пока нет новых вопросов.</p>
        ) : (
          <ul>
            {questions.map((q) => (
              <li
                key={q.id}
                style={{
                  marginBottom: "15px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <strong>Дата:</strong> {new Date(q.createdAt).toLocaleString()}{" "}
                <br />
                <strong>Сообщение:</strong> {q.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
