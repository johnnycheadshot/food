import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import ImageDetail from "./ImageDetail";

const ResultsList = ({ title, results, navigation }) => {
  // Render nothing if no results
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ImageDetail
                name={item.name}
                image_url={item.image_url}
                rating={item.rating}
                review_count={item.review_count}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  }
});

export default withNavigation(ResultsList);
