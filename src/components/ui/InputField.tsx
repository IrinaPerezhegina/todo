import { ChevronDown } from "lucide-react";
import styles from "../../styles/InputField.module.scss";

export interface InputFieldProps {
  handleAdd: VoidFunction;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
}
export const InputField: React.FC<InputFieldProps> = ({
  inputValue,
  handleAdd,
  setInputValue,
}) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={handleAdd}>
        <ChevronDown strokeWidth={2} size={30} />
      </button>

      <input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
    </div>
  );
};
