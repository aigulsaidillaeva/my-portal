// Пример страницы выхода (logout.js)
import React, { useEffect } from "react";
import Layout from "@theme/Layout";

export default function Logout() {
  useEffect(() => {
    // Очистка токена при выходе
    localStorage.removeItem("admin_token");
    window.location.href = "/"; // Перенаправление на главную страницу после выхода
  }, []);

  return (
    <Layout title="Выход">
      <div className="container margin-vert--lg">
        <h1>Выход из системы...</h1>
        <p>Выход выполнен, вас перенаправит на главную страницу.</p>
      </div>
    </Layout>
  );
}
