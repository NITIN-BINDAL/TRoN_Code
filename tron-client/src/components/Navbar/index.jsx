import styles from "./Navbar.module.css";

// constants
import { navbarLinks } from "../../constants/routes";
import { colors } from "../../constants/colors";
import history from "../../config/history";

// components
import { IoLogoIonitron } from "react-icons/io";
import { Tooltip } from "antd";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div onClick={() => history.push("/")} className={styles.logoContainer}>
        <IoLogoIonitron />
      </div>

      <nav className={styles.navContainer}>
        {navbarLinks.map((ele, eleIdx) => (
          <Tooltip
            title={ele.name}
            color={colors.PRIMARY_DARK_BLUE}
            placement="right"
            key={eleIdx}
          >
            <div
              onClick={() => history.push(ele.route)}
              className={styles.navEle}
            >
              {ele.icon}
            </div>
          </Tooltip>
        ))}
      </nav>

      {/* <div className={styles.otherContainer}>
        <Tooltip
          title="Theme"
          color={colors.PRIMARY_DARK_BLUE}
          placement="right"
          key="Theme"
        >
          <div onClick={() => alert("Theme Change")} className={styles.navEle}>
            <RiSunFill />
          </div>
        </Tooltip>
      </div> */}
    </div>
  );
};

export default Navbar;
