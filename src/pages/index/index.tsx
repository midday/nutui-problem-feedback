import { Button, View } from "@tarojs/components";
import { Tag } from "@nutui/nutui-react-taro";
import { useState } from "react";

const DemoIndex = () => {
  const [tagClassName, setTagClassName] = useState<string>("red");
  return (
    <View className="demo-index">
      <Tag className={tagClassName}>
        {tagClassName === "red" ? "red" : "yellow"}
      </Tag>
      <Button
        onClick={() =>
          setTagClassName(tagClassName === "red" ? "yellow" : "red")
        }
      >
        切换Tag颜色
      </Button>
    </View>
  );
};
export default DemoIndex;
