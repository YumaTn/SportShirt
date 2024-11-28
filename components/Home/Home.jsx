import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../Header/Header'

const Home = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Hàm để bật/tắt thanh tìm kiếm
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  // Hàm để ẩn thanh tìm kiếm khi nhấn ngoài
  const dismissSearch = () => {
    setIsSearchActive(false);
    Keyboard.dismiss(); // Ẩn bàn phím khi nhấn ngoài
  };

  return (
    <TouchableWithoutFeedback onPress={dismissSearch}>
      <View style={styles.container}>
        <Header 
          isSearchActive={isSearchActive} 
          toggleSearch={toggleSearch} 
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
