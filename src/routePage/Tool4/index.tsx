import { useState } from "react";
import { Input, Button, message } from "antd";

import styles from "./index.module.less";

const { TextArea } = Input;

export default () => {
  const [leftText, setLeftText] = useState<any>("");
  const [rightText, setRightText] = useState<any>("");

  const commonConfig = {
    style: { height: "100%" },
    allowClear: true,
  };

  const handleClick = () => {
    // 空判断
    if (leftText === "") {
      message.warning("请输入文本");
      return;
    }
    // 格式化处理
    try {
      const afterFormatText = format(leftText);
      setRightText(afterFormatText);
    } catch (e) {
      message.error("转换失败");
    }
  };

  function format(text: ObjectAny) {
    return text.replace(
      /className=\{([^\.]+)\.([^}]+)\}/g,
      (match: string, $1, $2: string) => {
        // 如果有类似classnames函数处理的方法，就会有括号
        if (match.includes("(")) {
          // 不处理
          message.warning(
            "文件中有classnames库处理的方法，用库生成className的地方请手动处理",
            10
          );
          return match;
        }
        return `className="${$2}"`;
      }
    );
  }

  return (
    <div className={styles.tool}>
      <div className={styles.tool_left}>
        <TextArea
          placeholder="请输入需要替换的文本"
          value={leftText}
          onChange={(e: { target: { value: string } }) =>
            setLeftText(e.target.value.trim())
          }
          {...commonConfig}
        />
      </div>
      <div className={styles.tool_middle}>
        <Button type="primary" onClick={handleClick}>
          转换 =&gt;
        </Button>
      </div>
      <div className={styles.tool_right}>
        <TextArea
          placeholder="这里是结果"
          value={rightText}
          onChange={(e: { target: { value: string } }) =>
            setRightText(e.target.value.trim())
          }
          {...commonConfig}
        />
      </div>
    </div>
  );
};
