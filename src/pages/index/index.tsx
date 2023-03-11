import { useState } from "react";
import { View } from "@tarojs/components";
import { Cell, Button, Swipe, Dialog } from "@nutui/nutui-react-taro";

import "./index.scss";

const DemoIndex = () => {
  const [visible1, setVisible1] = useState(false);
  return (
    <View className="demo-index">
      <Swipe
        rightAction={
          <Button
            type="primary"
            shape="square"
            onClick={() => setVisible1(true)}
          >
            删除
          </Button>
        }
      >
        <Cell title="左滑删除" roundRadius={0} />
        <Dialog
          title="组件调用"
          visible={visible1}
          onOk={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
        >
          如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
        </Dialog>
      </Swipe>
    </View>
  );
};
export default DemoIndex;
