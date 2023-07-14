import { useState } from "react";
import { Input, Button, message } from "antd";

import styles from "./index.module.less";

const { TextArea } = Input;

export default () => {
  const [topLeftJson, setTopLeftJson] = useState<any>(""); // 要更新的json
  const [topRightJson, setTopRightJson] = useState<any>(""); // 翻译的新json
  const [bottomJson, setBottomJson] = useState<any>(""); // 结果json

  const commonConfig = {
    style: { height: "100%" },
    allowClear: true,
  };

  const handleClick = () => {
    // 非空检查
    if (topLeftJson === "" || topRightJson === "") {
      message.warning("你上面两个框有空的，大哥");
      return;
    }
    // 格式检查
    let topLeftJsonObj;
    try {
      topLeftJsonObj = JSON.parse(topLeftJson);
    } catch (e) {
      message.error("请检查左上输入框内的json格式");
    }
    let topRightJsonObj;
    try {
      topRightJsonObj = JSON.parse(topRightJson);
    } catch (e) {
      message.error("请检查右上输入框内的json格式");
      return;
    }
    // JSON.parse的漏网之鱼检查
    if (typeof topLeftJsonObj !== "object") {
      message.error("请检查左上输入框内的json格式");
    }
    if (typeof topRightJsonObj !== "object") {
      message.error("请检查右上输入框内的json格式");
      return;
    }
    const res = getFormatObj(topLeftJsonObj, topRightJsonObj);
    setBottomJson(JSON.stringify(res));
  };

  function getFormatObj(obj: ObjectAny, newObj: ObjectAny) {
    let res: ObjectAny = {};
    Object.keys(obj).forEach((key) => {
      if (key in newObj) {
        res[key] = newObj[key];
      } else {
        res[key] = obj[key];
      }
    });
    return res;
  }

  return (
    <div className={styles.tool2}>
      <div className={styles.tool2_top}>
        <div className={styles.tool2_topLeft}>
          <TextArea
            placeholder="请输入要更新的json"
            value={topLeftJson}
            onChange={(e: { target: { value: string } }) =>
              setTopLeftJson(e.target.value.trim())
            }
            {...commonConfig}
          />
        </div>
        <div className={styles.tool2_topRight}>
          <TextArea
            placeholder="请输入新的json翻译"
            value={topRightJson}
            onChange={(e: { target: { value: string } }) =>
              setTopRightJson(e.target.value.trim())
            }
            {...commonConfig}
          />
        </div>
      </div>
      <div className={styles.tool2_middle}>
        <Button type="primary" onClick={handleClick}>更新</Button>
      </div>
      <div className={styles.tool2_bottom}>
        <TextArea
          placeholder="这里是结果"
          value={bottomJson}
          onChange={(e: { target: { value: string } }) =>
            setBottomJson(e.target.value.trim())
          }
          {...commonConfig}
        />
      </div>
    </div>
  );
};
