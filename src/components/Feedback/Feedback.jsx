// src/pages/feedback.js
import React, { useState } from "react";
import axios from "axios";
import { HomepageHeader } from "../../pages";

export default function FeedbackPage() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://a9953b31be7a3b6f.mokky.dev/questions`, {
      message: question,
      createdAt: new Date().toISOString(),
    });
    setSubmitted(true);
    setQuestion("");
  };

  return (
    <div className="container margin-vert--lg">
      <HomepageHeader />
      <h1>Обратная связь</h1>
      {submitted ? (
        <p>Спасибо! Ваш вопрос отправлен.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Введите ваш вопрос или отзыв..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={6}
            style={{ width: "100%", padding: "10px" }}
            required
          />
          <br />
          <button
            type="submit"
            className="button button--primary margin-top--md"
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
}
