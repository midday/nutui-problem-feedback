import { View } from "@tarojs/components";
import { SearchBar, Tabs } from "@nutui/nutui-react-taro";
import { useState } from "react";

const DemoIndex = () => {
  const [tab1value, setTab1value] = useState<string>("");
  return (
    <View>
      <Tabs
        value={tab1value}
        onChange={({ paneKey }) => {
          setTab1value(paneKey);
        }}
      >
        <Tabs.TabPane paneKey="" title="全部">
          全部内容
        </Tabs.TabPane>
        <Tabs.TabPane paneKey="PENDING_DELIVERY" title="待发货">
          待发货
        </Tabs.TabPane>
        <Tabs.TabPane paneKey="CANCELED" title="已取消">
          已取消
        </Tabs.TabPane>
      </Tabs>
    </View>
  );
};
export default DemoIndex;
