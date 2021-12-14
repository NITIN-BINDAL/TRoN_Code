import styles from "./PageTitle.module.css";
const PageTitle = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};

export default PageTitle;
