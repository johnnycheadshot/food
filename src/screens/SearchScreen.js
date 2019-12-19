import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();

  // Creates a sublist of results matching price
  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errMsg !== "" ? <Text>{errMsg}</Text> : null}
      <Text style={styles.text}>We found {results.length} results</Text>

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          title="A Bit Pricier"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginLeft: 15
  }
});

export default SearchScreen;
