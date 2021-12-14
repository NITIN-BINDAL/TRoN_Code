import styles from "./Breadcrumbs.module.css";

// constants
import history from "../../config/history";

const Breadcrumbs = ({ crumbsList }) => {
  return (
    <div className={styles.container}>
      {">"}
      {crumbsList.map((crumb, crumbIdx) => (
        <div
          onClick={() => history.push(crumb.route)}
          key={crumbIdx}
          className={styles.crumb}
        >
          {crumb.name} {crumbIdx !== crumbsList - 1 && "/"}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
