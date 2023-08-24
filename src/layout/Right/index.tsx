import { Routes, Route } from "react-router-dom";

import Tool1 from "@/routePage/Tool1";
import Tool2 from "@/routePage/Tool2";
import Tool3 from "@/routePage/Tool3";

import styles from "./index.module.less";

export default () => {
  return (
    <div className={styles.right}>
      <Routes>
        <Route path="tool1" element={<Tool1 />} />
        <Route path="tool2" element={<Tool2 />} />
        <Route path="tool3" element={<Tool3 />} />
      </Routes>
    </div>
  );
};
