import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = ({ isSearchActive, toggleSearch }) => {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {!isSearchActive ? (
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={toggleSearch} style={styles.iconTouchable}>
              <Ionicons name="search" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>Sport Shirt Shop</Text>
            <TouchableOpacity>
              <FontAwesome name="filter" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder=" Search"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              autoFocus={true}
            />
          </View>
        )}
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  
    backgroundColor: '#6C28FE',
    paddingTop: 40, 
    paddingBottom: 20,  
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  searchInput: {
    flex: 1,
    height: 40, 
    color: '#000',
  },
  iconTouchable: {
    padding: 10, 
  },
});
