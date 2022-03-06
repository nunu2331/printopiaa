import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Container = ({children, padding, flex}) => {
  return <View style={styles.container({padding, flex})}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: ({padding, flex}) => ({
    flex: flex,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: padding,
  }),
});
