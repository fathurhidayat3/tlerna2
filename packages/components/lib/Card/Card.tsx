import { Button } from "@tlerna2/foundations";
import styles from "./styles.module.css";
import React from "react";

export interface Props {
  title?: string;
  content?: React.ReactNode;
}

export function Card(props: Props) {
  const { title, content } = props;
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div>{content}</div>
      <hr />
      <Button addOn={{ text: "!" }}>click me</Button>
    </div>
  );
}
