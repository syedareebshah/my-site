import Image from "next/image";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography>HI Ehmer, zyada gaand matt phulao...</Typography>
      <Typography>Started working on it...</Typography>
    </main>
  );
}
