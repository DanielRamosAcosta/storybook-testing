import styles from "./Chip.module.css";
import classNames from "classnames";

export const enum Color {
  PURPLE = "purple",
  GREEN = "green",
  ORANGE = "orange",
  BLUE = "blue",
}

export type ChipProps = {
  /**
   * Chip short description text. Between 10 and 20 words.
   */
  label: string;
  /**
   * Chip color.
   * @default "green"
   */
  color?: Color;
};

export const Chip = ({ label, color = Color.GREEN }: ChipProps) => (
  <div className={classNames(styles.base, styles[color])}>
    <span>{label}</span>
  </div>
);
