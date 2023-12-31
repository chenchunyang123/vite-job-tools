import { Routes, Route } from "react-router-dom";

import Tool1 from "@/routePage/Tool1";
import Tool2 from "@/routePage/Tool2";
import Tool3 from "@/routePage/Tool3";
import Tool4 from "@/routePage/Tool4";
import Tool5 from "@/routePage/Tool5";
import Tool6 from "@/routePage/Tool6";

import styles from "./index.module.less";

export default () => {
  return (
    <div className={styles.right}>
      <Routes>
        <Route path="tool1" element={<Tool1 />} />
        <Route path="tool2" element={<Tool2 />} />
        <Route path="tool3" element={<Tool3 />} />
        <Route path="tool4" element={<Tool4 />} />
        <Route path="tool5" element={<Tool5 />} />
        <Route path="tool6" element={<Tool6 />} />
      </Routes>
    </div>
  );
};
