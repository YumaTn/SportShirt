import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.info}>Category</Text>
      </View>
      </View>
  )
}

export default Category
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        paddingTop: 50,
        backgroundColor: '#6C28FE',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#6C28FE',
      },
      info: {
        fontSize: 20,
        paddingLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 18,
      },
  });