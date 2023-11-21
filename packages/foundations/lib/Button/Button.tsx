import styles from "./styles.module.css";

export interface ButtonAddon {
  text: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addOn: ButtonAddon | undefined | null;
}

export function Button(props: ButtonProps) {
  const { className, addOn, ...restProps } = props;
  return (
    <>
      <button className={`${className} ${styles.button}`} {...restProps} />
      {addOn ? addOn.text : undefined}
    </>
  );
}

//
