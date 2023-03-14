import { View } from "@tarojs/components";
import { Calendar } from "@nutui/nutui-react-taro";

const DemoIndex = () => {
  return (
    <View>
      <Calendar poppable={false} startDate="2023-01-01" endDate="2025-01-30" />
    </View>
  );
};
export default DemoIndex;
