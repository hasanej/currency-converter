import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({
  base, desired, conversionRate, date,
}) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {desired} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  desired: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
