import Navbar from "../components/Navbar";

type LayoutProps = {
    children: React.ReactNode;
  };

export default function Layout({ children }: LayoutProps) {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  }