import {Text as RNText} from 'react-native';
import {View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const TextCard = ({title, desc}) => {
  return (
    <View style={styles.textWrapper}>
      <RNText style={styles.title}>{title}</RNText>
      <RNText style={styles.desc}>{desc}</RNText>
    </View>
  );
};

export default TextCard;

const styles = StyleSheet.create({
  textWrapper: {
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#301303',
  },
  desc: {
    fontFamily: 'Poppins',
    fontSize: 14,
    marginTop: 8,
    color: '#988981',
  },
});
