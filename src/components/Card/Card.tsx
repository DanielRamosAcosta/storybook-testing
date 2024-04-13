import styles from "./Card.module.css";
import classNames from "classnames";

export type CardProps = {
  /**
   * The title prop specifies the main title or heading of the card.
   * It provides a concise description of the card's content.
   */
  title: string;
  /**
   * The description prop provides additional textual content to supplement the title.
   * It offers more detailed information about the card's content.
   */
  description: string;
  /**
   * The image prop is an optional property that allows the inclusion of an image within the card.
   * It enhances visual appeal and provides context to the card's content.
   */
  image?: string;
};

/**
 * Card component represents a styled container typically used for displaying content.
 * It may contain a title, description, and optional image.
 */
export const Card = ({ title, description, image }: CardProps) => (
  <div className={classNames(styles.base)}>
    {image && <img src={image} alt={title} />}
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
