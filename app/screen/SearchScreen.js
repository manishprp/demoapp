import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SearchBox from '../components/SearchBox';
import useApi from '../hooks/useApi';
import listings from '../api/listings';
import CardItem from '../components/CardItem';
import AppActivityIndicator from '../components/AppActivityIndicator';

function SearchScreen(props) {
  const {
    request: search,
    error,
    data: list,
    loading,
  } = useApi(listings.searchProduct);

  console.log(list);
  if (loading) {
    return <AppActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <SearchBox
        onSubmit={searchText => {
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
