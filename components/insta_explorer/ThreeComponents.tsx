import React, { memo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import FinalItem from "./FinalItem";
import { IComponent } from "./InstaExplorerLayout";

const { width } = Dimensions.get("window");
const smallWidth = width / 3;

const ThreeComponents = (props: IComponent & { isRight: boolean }) => {
  const item = (data: any, style: {}) => {
    return (
      <View style={{ ...style }}>
        <FinalItem
          data={data}
          itemLbl={props?.itemLbl}
          children={props?.children}
          onPressItem={props?.onPressItem}
        />
      </View>
    );
  };

  return props.isRight ? (
    // big item in right
    <View style={styles.row}>
      <View style={styles.twoItemContainer}>
        {item(props?.item?.data[0], styles.twoColumnBelow)}
        {item(props?.item?.data[1], styles.twoColumnBelow)}
      </View>

      {item(props?.item?.data[2], styles.bigItemStyle)}
    </View>
  ) : (
    // big item in left
    <View style={styles.row}>
      {item(props?.item?.data[0], styles.bigItemStyle)}

      <View style={styles.twoItemContainer}>
        {item(props?.item?.data[1], styles.twoColumnBelow)}
        {item(props?.item?.data[2], styles.twoColumnBelow)}
      </View>
    </View>
  );
};

export default memo(ThreeComponents);

const styles = StyleSheet.create({
  row: { flexDirection: "row", width: "100%" },
  twoItemContainer: { flex: 1 },
  twoColumnBelow: {
    padding: 1,
    width: "100%",
    height: smallWidth,
  },
  bigItemStyle: { height: smallWidth * 2, width: smallWidth * 2, padding: 1 },
});
