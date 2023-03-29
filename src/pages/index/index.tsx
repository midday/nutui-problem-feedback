import React, { useState } from "react";
import { DatePicker, Cell } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";

const App = () => {
  const [show1, setShow1] = useState(false);
  const [desc1, setDesc1] = useState("2012年 01月 01日");
  const confirm1 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc1(options.map((option) => option.text).join(" "));
  };
  return (
    <>
      <Cell title="显示中文" desc={desc1} onClick={() => setShow1(true)} />
      <DatePicker
        title="日期选择"
        visible={show1}
        isShowChinese
        onCloseDatePicker={() => setShow1(false)}
        onConfirmDatePicker={(values, options) => confirm1(values, options)}
      />
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
      <View>滚动</View> <View>滚动</View> <View>滚动</View> <View>滚动</View>
    </>
  );
};
export default App;
