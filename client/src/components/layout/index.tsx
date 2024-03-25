import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "../ui/toaster";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="wrapper">{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
