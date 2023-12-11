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
  {
    url: "/tool3",
    name: "i18n转换为formatMessage",
  },
  {
    url: "/tool4",
    name: "className的css module转为普通类",
  },
  {
    url: "/tool5",
    name: "className普通类转为css module",
  },
  {
    url: "/tool6",
    name: "样式文件类名统一驼峰式",
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
