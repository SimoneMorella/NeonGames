import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type LayoutProps = {
    children: React.ReactNode;
  };

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
    return (
      <div className="min-h-svh bg-customBg flex flex-col overflow-hidden">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="flex flex-col flex-1"
            initial={{ opacity: 0, x: "30px" }}
            animate={{ opacity: 1, x: 0}}
            exit={{ x: "30px", opacity: 0 }}
            transition={{duration: 0.5}}
            >
            {children}
          </motion.div>
        </AnimatePresence>
        
      </div>
    );
  }

export function LayoutNoAnim({ children } : LayoutProps) {
  return (
    <div className="min-h-svh bg-customBg flex flex-col">
      <Navbar />
      {children}
  </div>
  )
}