import styles from "./Message.module.css";

function Message({ txt }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {txt}
    </p>
  );
}

export default Message;
