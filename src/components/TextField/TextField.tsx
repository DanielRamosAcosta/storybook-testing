import styles from "./TextField.module.css";

export type TextFieldProps = {
  /**
   * The label prop specifies the descriptive label associated with the input field.
   * It provides context and guidance to the user regarding the expected input.
   */
  label: string;
  /**
   * The id prop is a unique identifier for the input field, used for accessibility purposes.
   * It must be unique within the page and is typically used in conjunction with the label.
   */
  id: string;
  /**
   * The placeholder prop specifies a short hint that describes the expected input within the field.
   * It provides additional guidance to users when the input field is empty.
   */
  placeholder?: string;
  /**
   * The type prop determines the type of input expected in the field.
   * When type="email" is set and the input does not match an email format, an error message will be displayed automatically.
   */
  type?: "email" | "password" | "text";
  /**
   * The error prop is a string that represents an error message to be displayed when there is an input validation error.
   * It is automatically shown when the input does not match the expected format, such as an invalid email address.
   */
  error?: string;
  /**
   * The value prop represents the current value of the input field.
   * It is required as TextField is a controlled component, meaning its value is controlled by external state.
   */
  value: string;
  /**
   * TextField component renders an input field with specified label, placeholder, type, and error handling.
   * It ensures accessibility and usability in capturing text-based user input within forms.
   */
  setValue: (value: string) => void;
};

/**
 * TextField component provides a customizable input field for text-based input.
 * It is commonly used for capturing user input such as names, emails, or any other text data.
 */
export const TextField = ({
  id,
  label,
  placeholder,
  type,
  error,
  value,
  setValue,
}: TextFieldProps) => {
  return (
    <div className={styles.base}>
      <div className={styles.inputLabel}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <p className={styles.error}>{error}</p>
      </div>
    </div>
  );
};
