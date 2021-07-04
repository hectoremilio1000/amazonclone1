import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem/ProductItem';

import products from '../../data/products';

const HomeScreen = ({searchValue}) => {
  console.log(searchValue)
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} key={item.id}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;