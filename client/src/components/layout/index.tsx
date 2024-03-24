import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
