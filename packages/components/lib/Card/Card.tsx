import { Button, ButtonProps } from "@tlerna2/foundations";
import styles from "./styles.module.css";
import React from "react";

export interface Props {
  title?: string;
  content?: React.ReactNode;
  button: ButtonProps;
}

export function Card(props: Props) {
  const { title, content, button } = props;
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div>{content}</div>
      <hr />
      <Button addOn={button.addOn}>{button.children}</Button>
    </div>
  );
}
