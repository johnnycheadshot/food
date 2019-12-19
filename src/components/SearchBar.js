import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        placeholder="Search"
        autoCorrect={false}
        value={searchTerm}
        onChangeText={(newTerm) => onSearchTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 20
  },
  iconStyle: {
    fontSize: 35
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  }
});

export default SearchBar;
