import React, { useEffect, useState } from "react";
import { useHistory } from "@docusaurus/router";
import axios from "axios";
import Layout from "@theme/Layout";
import styled from "styled-components";



export default function AdminDashboard() {
  const history = useHistory();
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedTab, setSelectedTab] = useState("new");
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      history.push("/login");
      return;
    }

    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
          "https://a9953b31be7a3b6f.mokky.dev/questions"
        );
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Ошибка загрузки отзывов:", error);
      }
    };

    fetchFeedbacks();
  }, [history]);

  const handleMarkAsRead = async (id) => {
    try {
      await axios.patch(`https://a9953b31be7a3b6f.mokky.dev/questions/${id}`, {
        isRead: true,
      });
      setFeedbacks((prev) =>
        prev.map((item) => (item.id === id ? { ...item, isRead: true } : item))
      );
    } catch (error) {
      console.error("Ошибка при обновлении отзыва:", error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `https://a9953b31be7a3b6f.mokky.dev/questions/${deleteId}`
      );
      setFeedbacks((prev) => prev.filter((item) => item.id !== deleteId));
      setDeleteId(null);
    } catch (error) {
      console.error("Ошибка при удалении отзыва:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    history.push("/login");
  };

  const newFeedbacks = feedbacks.filter((item) => !item.isRead);
  const readFeedbacks = feedbacks.filter((item) => item.isRead);

  const displayedFeedbacks =
    selectedTab === "new" ? newFeedbacks : readFeedbacks;

  return (
    <Layout>
      <h1>Добро пожаловать в админ-панель!</h1>
      <Button onClick={handleLogout}>Выйти</Button>

      <Tabs>
        <TabButton
          active={selectedTab === "new"}
          onClick={() => setSelectedTab("new")}
        >
          Новые отзывы ({newFeedbacks.length})
        </TabButton>
        <TabButton
          active={selectedTab === "read"}
          onClick={() => setSelectedTab("read")}
        >
          Прочитанные отзывы ({readFeedbacks.length})
        </TabButton>
      </Tabs>

      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Сообщение</th>
              <th>Email</th>
              <th>Оценка</th>
              <th>Дата</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {displayedFeedbacks.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", padding: "2rem" }}
                >
                  Нет отзывов.
                </td>
              </tr>
            ) : (
              displayedFeedbacks.map((item) => (
                <tr key={item.id}>
                  <td>{item.message}</td>
                  <td>{item.email || "-"}</td>
                  <td>
                    {item.rating === "like"
                      ? "👍"
                      : item.rating === "dislike"
                      ? "👎"
                      : "-"}
                  </td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  <td>
                    {selectedTab === "new" && (
                      <Button onClick={() => handleMarkAsRead(item.id)}>
                        Прочитано
                      </Button>
                    )}
                    <Button danger onClick={() => setDeleteId(item.id)}>
                      Удалить
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </StyledTable>
      </TableWrapper>

      {deleteId && (
        <ModalBackground>
          <ModalContent>
            <h2>Удалить отзыв?</h2>
            <p>Это действие нельзя будет отменить.</p>
            <div style={{ marginTop: "1rem" }}>
              <Button danger onClick={handleDeleteConfirm}>
                Да, удалить
              </Button>
              <Button onClick={() => setDeleteId(null)}>Отмена</Button>
            </div>
          </ModalContent>
        </ModalBackground>
      )}
    </Layout>
  );
}
const Tabs = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: ${(props) => (props.active ? "#0066ff" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px 8px 0 0;

  &:hover {
    background: ${(props) => (props.active ? "#0052cc" : "#e0e0e0")};
  }
`;

const TableWrapper = styled.div`
  width: 100%; /* Ensure the wrapper takes full width */
  overflow-x: auto;
  margin-top: 1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    text-align: left;
  }

  th {
    background: #f5f5f5;
  }

  /* Adjust the column width for "Сообщение" */
  th:first-child,
  td:first-child {
    width: 40%; /* You can adjust the percentage as needed */
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const Button = styled.button`
  margin-right: 0.5rem;
  margin-top: 0.3rem;
  background: ${(props) => (props.danger ? "#ff4d4f" : "#0066ff")};
  color: white;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: ${(props) => (props.danger ? "#cc0002" : "#0052cc")};
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 90%;
`;
