import Header from "@/layout/Header";
import Left from "@/layout/Left";
import Right from "@/layout/Right";

import styles from "./app.module.less";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
