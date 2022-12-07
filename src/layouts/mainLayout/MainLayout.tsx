import styles from "./MainLayout.module.css";
import React from "react";
import { Header, Footer } from "../../components";

interface PropsType {
  children: React.ReactNode;
}

export const MainLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      {/* 頁面內容 content */}
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};
