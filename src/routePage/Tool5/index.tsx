import { useState } from "react";
import { Input, Button, message } from "antd";
import _ from "lodash";

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

  function format(text: string) {
    return text.replace(/className="([^"]*)"/g, function (match, p1) {
      // 如果有类似classnames函数处理的方法，就会有括号
      if (match.includes("(")) {
        // 不处理
        message.warning(
          "文件中有classnames库处理的方法，用库生成className的地方请手动处理",
          10
        );
        return match;
      }

      // 将带横杠的类名分割为各部分
      const parts = p1.split("-");

      // 将各部分转换为驼峰式
      const camelCaseParts = parts.map((part: string, index: number) => {
        if (index !== 0) {
          return _.upperFirst(part);
        }
        return part;
      });

      // 重新组合各部分为一个驼峰式类名
      const camelCaseClass = camelCaseParts.join("");

      // 将原先的类名替换为驼峰式类名
      return `className={styles.${camelCaseClass}}`;
    });
  }

  return (
    <div className={styles.tool1}>
      <div className={styles.tool1_left}>
        <TextArea
          placeholder="请输入需要替换的文本"
          value={leftText}
          onChange={(e: { target: { value: string } }) =>
            setLeftText(e.target.value.trim())
          }
          {...commonConfig}
        />
      </div>
      <div className={styles.tool1_middle}>
        <Button type="primary" onClick={handleClick}>
          转换 =&gt;
        </Button>
      </div>
      <div className={styles.tool1_right}>
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
