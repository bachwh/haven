import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import { borderColor, primaryTextColor } from '../commonColors';

const styles = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor,
  },
  text: {
    fontSize: 15,
    color: primaryTextColor,
    fontWeight: 'bold',
  },
};

export default ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.wrapper}><Text style={styles.text}>Reset filters</Text></View>
  </TouchableWithoutFeedback>
);
