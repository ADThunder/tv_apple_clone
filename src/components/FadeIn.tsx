import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -250px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
