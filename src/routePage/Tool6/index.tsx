import { useState } from "react";
import { Input, Button, message, Typography } from "antd";
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

  // 定义横线转驼峰的函数
  function hyphenToCamelCase(s: string) {
    return s.replace(/-(.)/g, function (_, character) {
      return character.toUpperCase();
    });
  }

  // 定义转换函数
  function convertClassName(className: string) {
    // 如果类名以"ant"或"igloo"开头，则不进行转换
    if (className.startsWith("ant") || className.startsWith("igloo")) {
      return className;
    }

    // else, convert to camelCase
    return hyphenToCamelCase(className);
  }

  function format(text: string) {
    return text.replace(/\.([\w-]+)/g, (_, p1) => {
      return "." + convertClassName(p1);
    });
  }

  return (
    <>
      <Typography.Title level={4}>
        会排除掉以下开头的类名：ant、igloo
      </Typography.Title>
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
    </>
  );
};
