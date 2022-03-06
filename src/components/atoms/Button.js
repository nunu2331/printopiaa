import {Text as RNText} from 'react-native';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

const Button = ({title, bottom, primary, image}) => {
  return (
    <>
      {primary ? (
        <TouchableOpacity style={styles.containerPrimary(bottom)}>
          <RNText style={styles.titlePrimary}>{title}</RNText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.container(bottom)}>
          <Image source={image} style={styles.image} />
          <RNText style={styles.title}>{title}</RNText>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  containerPrimary: bottom => ({
    backgroundColor: '#F8AF86',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 60,
    marginBottom: bottom,
  }),
  container: bottom => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#667171',
    marginBottom: bottom,
  }),
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },

  titlePrimary: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    color: '#301303',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    color: '#667171',
  },
  desc: {
    fontFamily: 'Poppins',
    fontSize: 14,
    marginTop: 8,
    color: '#988981',
  },
});
