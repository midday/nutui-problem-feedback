import { View } from "@tarojs/components";
import { Cell, Button, Ellipsis } from "@nutui/nutui-react-taro";
import { useState } from "react";

const DemoIndex = () => {
  const [content, setContent] = useState<string>("Hello World");
  return (
    <View>
      <Cell>
        <Ellipsis content={content} />
      </Cell>
      <Cell>
        <Button
          onClick={() =>
            setContent(
              "NutUI 上线后我们研发团队也在不断的优化、测试、使用、迭代的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。"
            )
          }
        >
          切换内容
        </Button>
      </Cell>
    </View>
  );
};
export default DemoIndex;
