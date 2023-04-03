import { View } from "@tarojs/components";
import { Grid, GridItem } from "@nutui/nutui-react-taro";

const DemoIndex = () => {
  return (
    <View>
      <Grid columnNum={3} square>
        <GridItem className="custom-grid-item" icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
      </Grid>
    </View>
  );
};
export default DemoIndex;
