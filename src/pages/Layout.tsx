import Navbar from "../components/Navbar";

type LayoutProps = {
    children: React.ReactNode;
  };

export default function Layout({ children }: LayoutProps) {
    return (
      <div className="min-h-svh bg-customBg flex flex-col">
        <Navbar />
        {children}
      </div>
    );
  }