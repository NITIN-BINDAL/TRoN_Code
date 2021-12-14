import styles from "./ResultDemoPage.module.css";

// constants
import { pageTitles } from "../../constants/appConstants";

// components
import PageTitle from "../../components/PageTitle";
import CursedChildActOne from "./CursedChildActOne";

const sectionIds = {
  CURSED_CHILD_ACT_ONE: {
    id: "#cursed-child-act-one",
    name: "Harry Potter and the Cursed Child | Act One, Scene-1",
    component: (
      <CursedChildActOne
        id="cursed-child-act-one"
        title="Harry Potter and the Cursed Child | Act One, Scene-1"
      />
    ),
  },
};

const ResultDemoPage = () => {
  return (
    <section>
      <PageTitle title={pageTitles.RESULTS_DEMO} />
      <div className={styles.btnsContainer}>
        {Object.keys(sectionIds).map((section, sectionIdx) => (
          <a
            className={styles.btns}
            href={sectionIds[section].id}
            key={sectionIdx}
          >
            {sectionIds[section].name}
          </a>
        ))}
      </div>
      <div className={styles.demoSectionsCtnr}>
        {Object.keys(sectionIds).map((section) => {
          return sectionIds[section].component;
        })}
      </div>
    </section>
  );
};

export default ResultDemoPage;
