import React from "react";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="layout">
      <header>
        <Header />
      </header>
      <section className="container mx-auto mt-20">{children}</section>
      <footer>{/* Aquí puedes agregar tu pie de página */}</footer>
    </main>
  );
};

export default Layout;
