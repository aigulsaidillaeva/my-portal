import React from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import { useDocusaurusContext } from "@docusaurus/core";

export default function LocaleSwitcher() {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();
  const location = useLocation();

  const currentLocale = i18n.currentLocale;

  const switchLocale = (locale) => {
    if (currentLocale !== locale) {
      const newPath = location.pathname.replace(
        `/${currentLocale}`,
        `/${locale}`
      );
      history.push(newPath);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <span
        onClick={() => switchLocale("ru")}
        style={{
          marginRight: 8,
          textDecoration: currentLocale === "ru" ? "underline" : "none",
        }}
      >
        Рус
      </span>
      |
      <span
        onClick={() => switchLocale("ky")}
        style={{
          marginLeft: 8,
          textDecoration: currentLocale === "ky" ? "underline" : "none",
        }}
      >
        Кыр
      </span>
    </div>
  );
}
