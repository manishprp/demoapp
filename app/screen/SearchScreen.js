import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SearchBox from '../components/SearchBox';
import useApi from '../hooks/useApi';
import listings from '../api/listings';
import CardItem from '../components/CardItem';

function SearchScreen(props) {
  const {
    request: search,
    error,
    data: list,
    loading,
  } = useApi(listings.searchProduct);
  console.log(list);
  return (
    <View style={styles.container}>
      <SearchBox
        onSubmit={searchText => {
          console.log(searchText);
          search(searchText);
        }}
      />

      {list && (
        <FlatList
          data={list?.products}
          keyExtractor={item => item?.id.toString()}
          renderItem={item => <CardItem item={item?.item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SearchScreen;
