import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

import styles from "./index.module.less";

const menuConfig = [
  {
    url: "/tool1",
    name: "过滤新添加的翻译",
  },
  {
    url: "/tool2",
    name: "更新翻译",
  },
];

export default () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.left}>
      <Menu
        defaultSelectedKeys={[pathname]}
        style={{
          height: "100%",
          paddingTop: 20,
          backgroundColor: "#f5f5f5",
          fontWeight: "bold",
        }}
      >
        {menuConfig.map((item, idx) => (
          <Menu.Item key={item.url}>
            <Link to={item.url}>
              {idx + 1}、{item.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
