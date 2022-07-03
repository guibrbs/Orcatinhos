import "./styles.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

export function RegistrationPerformed() {
  return (
    <motion.div
      className="success-registration"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
    >
      <AiOutlineCheckCircle fontSize={20} />
      Cadastro realizado com sucesso!
    </motion.div>
  );
}
