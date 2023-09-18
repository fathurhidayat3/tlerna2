import styles from "./styles.module.css";

interface ButtonAddon {
  text: string;
}

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addOn: ButtonAddon | undefined | null;
}

export function Button(props: Props) {
  const { className, addOn, ...restProps } = props;
  return (
    <>
      <button className={`${className} ${styles.button}`} {...restProps} />
      {addOn ? addOn.text : undefined}
    </>
  );
}
