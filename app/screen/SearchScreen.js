import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SearchBox from '../components/SearchBox';

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <SearchBox
        onSubmit={searchText => {
          console.log(searchText);
        }}
      />
      <FlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SearchScreen;
