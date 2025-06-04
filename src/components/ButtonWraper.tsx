import styles from "../styles/ButtonWrapper.module.scss";
export type Status = "all" | "active" | "completed";
export interface ButtonWrapperProps {
  remainingCount: number;
  setStatusValue: (status: Status) => void;
  statusValue: Status;
  deleteCompleted: () => void;
}
export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  setStatusValue,
  remainingCount,
  statusValue,
  deleteCompleted,
}) => {
  return (
    <div className={styles.filters}>
      <div>
        <span> {remainingCount} items left</span>
      </div>
      <div>
        <button
          className={
            statusValue === "all" ? styles.activeBtn : styles.noActiveBtn
          }
          onClick={() => setStatusValue("all")}
        >
          All
        </button>
        <button
          className={
            statusValue === "active" ? styles.activeBtn : styles.noActiveBtn
          }
          onClick={() => setStatusValue("active")}
        >
          Active
        </button>
        <button
          className={
            statusValue === "completed" ? styles.activeBtn : styles.noActiveBtn
          }
          onClick={() => setStatusValue("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        <button className={styles.clear} onClick={deleteCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
};
