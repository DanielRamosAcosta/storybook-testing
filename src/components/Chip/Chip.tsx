import styles from "./Chip.module.css";
import classNames from "classnames";
import { ChipColor } from "./ChipColor.ts";

export type ChipProps = {
  /**
   * The label prop specifies the text content displayed within the chip.
   * It provides a descriptive label for the tag or feature being represented.
   */
  label: string;
  /**
   * The color prop determines the visual appearance of the chip.
   * It accepts values from the ChipColor enum, allowing for predefined color options.
   */
  color?: ChipColor;
};

/**
 * Chip component represents a small, interactive element used for displaying tags or features.
 * It is commonly utilized within contexts such as book cards to represent genres or categories.
 */
export const Chip = ({ label, color = ChipColor.GREEN }: ChipProps) => (
  <div className={classNames(styles.base, styles[color])}>
    <span>{label}</span>
  </div>
);
