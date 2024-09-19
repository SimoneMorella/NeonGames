import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type LayoutProps = {
    children: React.ReactNode;
  };

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
    return (
      <div className="min-h-svh bg-customBg flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="flex flex-col flex-1"
            initial={{ opacity: 0, x: "10px" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: "10px", opacity: 0 }}
            transition={{duration: 0.5}}
            >
            {children}
          </motion.div>
        </AnimatePresence>
        
      </div>
    );
  }