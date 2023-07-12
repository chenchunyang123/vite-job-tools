import { useState } from "preact/hooks";
import { Input, Button, message } from "antd";

import styles from "./index.module.less";

const { TextArea } = Input;

export default () => {
  const [leftJson, setLeftJson] = useState<any>("");
  const [rightJson, setRightJson] = useState<any>("");

  const commonConfig = {
    style: { height: "100%" },
    allowClear: true,
  };

  const handleClick = () => {
    // 空判断
    if (leftJson === "") {
      message.warning("请输入json");
      return;
    }
    // 对象判断
    if (/^'\{[\s\S]*\}'$/.test(leftJson)) {
      message.error("无效的json");
      return;
    }
    // 格式化处理
    try {
      const leftJsonObj = JSON.parse(leftJson);
      const afterFormatJson = JSON.stringify(format(leftJsonObj));
      setRightJson(afterFormatJson);
    } catch (e) {
      message.error("无效的json");
    }
  };

  function format(obj: ObjectAny) {
    let res: ObjectAny = {};
    Object.keys(obj).forEach((key) => {
      const v = obj[key];
      if (v.trim() === "") {
        res[key] = "";
      }
    });
    return res;
  }

  return (
    <div className={styles.tool1}>
      <div className={styles.tool1_left}>
        <TextArea
          placeholder="请输入待过滤的json"
          value={leftJson}
          onChange={(e: { target: { value: string } }) =>
            setLeftJson(e.target.value.trim())
          }
          {...commonConfig}
        />
      </div>
      <div className={styles.tool1_middle}>
        <Button onClick={handleClick}>转换 =&gt;</Button>
      </div>
      <div className={styles.tool1_right}>
        <TextArea
          placeholder="这里是结果"
          value={rightJson}
          onChange={(e: { target: { value: string } }) =>
            setRightJson(e.target.value.trim())
          }
          {...commonConfig}
        />
      </div>
    </div>
  );
};
