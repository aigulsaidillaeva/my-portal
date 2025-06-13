import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Layout from "@theme/Layout";
import { ThumbsUp, ThumbsDown } from "lucide-react"; 




export default function FeedbackPage() {
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://a9953b31be7a3b6f.mokky.dev/questions`, {
      message: question,
      email: email,
      rating: rating,
      createdAt: new Date().toISOString(),
    });
    setSubmitted(true);
    setQuestion("");
    setEmail("");
    setRating(null);
  };

  const handleButtonClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <Layout className="container margin-vert--lg">
      <Container isDarkBackground={isDarkBackground}>
        {submitted ? (
          <ThankYouMessage>Спасибо! Ваш отзыв отправлен.</ThankYouMessage>
        ) : (
          <>
            <Title>Поделитесь вашим мнением</Title>
            <Subtitle>Была ли эта страница полезной?</Subtitle>
            <ButtonGroup>
              <IconButton
                type="button"
                selected={rating === "like"}
                onClick={() => handleButtonClick("like")}
              >
                <ThumbsUp size={20} />
              </IconButton>
              <IconButton
                type="button"
                selected={rating === "dislike"}
                onClick={() => handleButtonClick("dislike")}
              >
                <ThumbsDown size={20} />
              </IconButton>
            </ButtonGroup>

            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="Напишите ваш отзыв здесь..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Оставьте ваш e-mail (по желанию)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <SubmitButton type="submit">Отправить</SubmitButton>
            </form>
          </>
        )}
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;

  /* Темный фон при активном состоянии */
  ${({ isDarkBackground }) =>
    isDarkBackground &&
    `
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(10px);
    `}
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
`;

const IconButton = styled.button`
  background: ${({ selected }) => (selected ? "#0066ff" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  border: 1px solid #ccc;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ selected }) => (selected ? "#0052cc" : "#f0f0f0")};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background: #f5f7f8;
  border: none;
  border-radius: 8px;
  resize: vertical;
  min-height: 120px;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background: #f5f7f8;
  border: none;
  border-radius: 8px;
  margin-bottom: 1rem;
`;



const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #0066ff;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0052cc;
  }
`;

const ThankYouMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: green;
`;