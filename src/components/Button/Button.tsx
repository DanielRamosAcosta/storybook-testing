import styles from "./Button.module.css";
import classNames from "classnames";

export type ButtonProps = {
  /**
   * The title prop specifies the text content displayed on the button
   */
  title: string;
  /**
   * The type prop determines the style variant of the button. It can be either "primary" or "secondary".
   */
  type?: "primary" | "secondary";
  /**
   * The onClick prop is a callback function triggered when the button is clicked.
   * It performs a specified action or behavior.
   */
  onClick?: () => void;
};

export const Button = ({ title, type = "primary", onClick }: ButtonProps) => (
  <button className={classNames(styles.base, styles[type])} onClick={onClick}>
    {title}
  </button>
);
