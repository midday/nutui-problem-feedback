import { Input } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";

const DemoIndex = () => {
  return (
    <View>
      <Input type="number" placeholder="希望弹出数字键盘" />
      <Input
        type="digit"
        placeholder="希望弹出小数点数字键盘且不被格式化为整数"
      />
    </View>
  );
};
export default DemoIndex;
