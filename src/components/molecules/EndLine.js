import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const EndLine = ({children, padding, flex}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineView} />
      <View style={styles.centerLine}>
        <Text>Or Login With</Text>
      </View>
      {/* <View style={styles.lineView} /> */}
    </View>
  );
};

export default EndLine;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
    flexDirection: 'row',
  },
  centerLine: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: 'white',
  },
  lineView: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCD0D0',
    position: 'absolute',
  },
});
