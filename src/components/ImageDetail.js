import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultsDetail = ({ image_url, name, rating, review_count }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 15,
    marginVertical: 5
  },
  image: {
    height: 120,
    width: 200,
    borderRadius: 10
  },
  name: {
    fontWeight: "bold"
  }
});

export default React.memo(ResultsDetail);
