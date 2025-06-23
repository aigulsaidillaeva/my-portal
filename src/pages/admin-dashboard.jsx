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
      history.push("/doc/login");
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
    history.push("/doc/login");
  };

  const newFeedbacks = feedbacks.filter((item) => !item.isRead);
  const readFeedbacks = feedbacks.filter((item) => item.isRead);
  const displayedFeedbacks = selectedTab === "new" ? newFeedbacks : readFeedbacks;

  return (
    <Layout>
      <PageContainer>
        <Header>
          <Title>Админ-панель отзывов</Title>
          <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
        </Header>

        <Tabs>
          <TabButton active={selectedTab === "new"} onClick={() => setSelectedTab("new")}>Новые ({newFeedbacks.length})</TabButton>
          <TabButton active={selectedTab === "read"} onClick={() => setSelectedTab("read")}>Прочитанные ({readFeedbacks.length})</TabButton>
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
                  <td colSpan="5" style={{ textAlign: "center", padding: "2rem" }}>Нет отзывов</td>
                </tr>
              ) : (
                displayedFeedbacks.map((item) => (
                  <tr key={item.id}>
                    <td>{item.message}</td>
                    <td>{item.email || "-"}</td>
                    <td>{item.rating === "like" ? "👍" : item.rating === "dislike" ? "👎" : "-"}</td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                    <td>
                      {selectedTab === "new" && <ActionButton onClick={() => handleMarkAsRead(item.id)}>Прочитано</ActionButton>}
                      <ActionButton danger onClick={() => setDeleteId(item.id)}>Удалить</ActionButton>
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
              <p>Это действие нельзя отменить.</p>
              <div style={{ marginTop: "1rem" }}>
                <ActionButton danger onClick={handleDeleteConfirm}>Да, удалить</ActionButton>
                <ActionButton onClick={() => setDeleteId(null)}>Отмена</ActionButton>
              </div>
            </ModalContent>
          </ModalBackground>
        )}
      </PageContainer>
    </Layout>
  );
}

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
`;

const LogoutButton = styled.button`
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background: #c0392b;
  }
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: ${(props) => (props.active ? "#2980b9" : "#ecf0f1")};
  color: ${(props) => (props.active ? "white" : "#34495e")};
  border: none;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => (props.active ? "#2471a3" : "#d0d3d4")};
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    text-align: left;
  }

  th {
    background: #f9fafc;
    font-weight: 600;
    color: #555;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const ActionButton = styled.button`
  background: ${(props) => (props.danger ? "#e74c3c" : "#3498db")};
  color: white;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  margin-right: 0.3rem;

  &:hover {
    background: ${(props) => (props.danger ? "#c0392b" : "#2980b9")};
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;