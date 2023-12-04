import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import NetworkImage from '../NetworkImage';

const StoreComponent = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <NetworkImage
        source={item.imageUrl}
        width={SIZES.width - 80}
        height={SIZES.height / 5.8}
        radius={16}
        mode={'cover'}
      />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default StoreComponent;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 15,
    backgroundColor: COLORS.lightWhite,
    padding: 8,
    borderRadius: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: 'regular',
    color: COLORS.gray,
  },
});
