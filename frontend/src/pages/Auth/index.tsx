import { Login } from "../../components/Login";
import "./styles.css";
import AuthIllustration from "../../assets/auth-illustration.svg";
import { Logon } from "../../components/Logon";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <section className="auth-section">
      <AnimatePresence exitBeforeEnter>
        {isRegistering ? (
          <motion.div
            className="motion"
            key={isRegistering ? "true" : "false"}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
          >
            <Logon setIsRegistering={setIsRegistering} />
          </motion.div>
        ) : (
          <motion.div
            className="motion"
            key={isRegistering ? "true" : "false"}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
          >
            <Login setIsRegistering={setIsRegistering} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="auth-illustation-section">
        <h1 className="auth-illustration-title">
          <span className="contrast">Adicione</span> os seus contatos a agenda
        </h1>
        <img src={AuthIllustration} alt="" className="auth-illustration" />
      </div>
    </section>
  );
}
