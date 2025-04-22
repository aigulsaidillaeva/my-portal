import React, { useState } from "react";
import styled from "styled-components";

// Создаём стилизованные компоненты
const FeedbackContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const FeedbackButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`;

const FeedbackStatus = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const SubmitButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Feedback = () => {
  const [feedback, setFeedback] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFeedback = (value) => {
    setFeedback(value);
  };

  const submitFeedback = () => {
    if (feedback === null) return;

    console.log("Отправлен фидбэк:", feedback);

    // Пример отправки через API
    // fetch('YOUR_API_URL', {
    //   method: 'POST',
    //   body: JSON.stringify({ feedback }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then(response => response.json()).then(data => console.log(data));

    setIsSubmitted(true);
  };

  return (
    <FeedbackContainer>
      <h3>Ваш фидбэк</h3>
      {!isSubmitted ? (
        <>
          <FeedbackButton onClick={() => handleFeedback("👍")}>
            👍 Полезно
          </FeedbackButton>
          <FeedbackButton onClick={() => handleFeedback("👎")}>
            👎 Не полезно
          </FeedbackButton>
          {feedback && <FeedbackStatus>Вы выбрали: {feedback}</FeedbackStatus>}
          <SubmitButton onClick={submitFeedback}>Отправить</SubmitButton>
        </>
      ) : (
        <p>Спасибо за ваш фидбэк!</p>
      )}
    </FeedbackContainer>
  );
};

export default Feedback;
