import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { fruitData } from './Data/FruitData'; // Import the data from data.js

const FlatListSearch = () => {
  // Set the initial data from the imported array
  const [data, setData] = useState(fruitData);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the data based on search query
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}><Text         
      style={styles.title}>
        Search from the FlatList</Text>
        </View>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      {/* FlatList to display data */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:90,
  },
  titlecontainer:{
    alignItems:'center'
  },
  title:{
    fontSize:30,
    fontWeight:'400'
  },
  searchInput: {
    marginTop: 80,
    height: 60,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius:50,
    marginBottom: 30,
    paddingHorizontal: 8,
    fontSize:20,
    paddingLeft:30,

  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 18,
  },
});

export default FlatListSearch;
