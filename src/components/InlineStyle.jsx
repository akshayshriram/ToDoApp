import React from "react";
// import "../css/style.css";
import styles from "./inlinestyle.module.css";

// const header = { color: "purple", backgroundColor: "cyan", fontSize: "56px" };

const InlineStyle = () => {
  return (
    <>
      <h3
        className={styles.header}
        // style={header}
      >
        InlineStyle Compontent
      </h3>
    </>
  );
};

export default InlineStyle;
