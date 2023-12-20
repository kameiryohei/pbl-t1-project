"use client";
import { motion } from "framer-motion";

const Hoge = () => (
  <motion.div
    initial={{ opacity: 0 }} // 初期状態
    animate={{ opacity: 1 }} // マウント時
    exit={{ opacity: 0 }} // アンマウント時
  ></motion.div>
);

export default Hoge;
