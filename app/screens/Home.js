import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_DESIRED_CURRENCY = 'IDR';
const TEMP_BASE_PRICE = '1';
const TEMP_DESIRED_PRICE = '14256.75';

class Home extends Component {
  handleChangeText = () => {
    console.log('Base currency changed');
  };

  handlePressBaseCurrency = () => {
    console.log('Base currency pressed');
  };

  handlePressQuoteCurrency = () => {
    console.log('Desired currency pressed');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          editable={false}
          buttonText={TEMP_DESIRED_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          value={TEMP_DESIRED_PRICE}
        />
      </Container>
    );
  }
}

export default Home;
