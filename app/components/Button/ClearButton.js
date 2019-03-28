import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity>
    <View>
      <Image source={require('./images/icon.png')} />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default ClearButton;
