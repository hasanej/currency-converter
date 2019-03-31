import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_DESIRED_CURRENCY = 'IDR';
const TEMP_BASE_PRICE = '1';
const TEMP_DESIRED_PRICE = '14256.75';
const TEMP_CONVERSION_RATE = 14256.75;
const TEMP_CONVERSION_DATE = new Date();

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

  handleSwapCurrency = () => {
    console.log('Swap currency pressed');
  }

  handleOptionPress = () => {
    console.log('Option is pressed');
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <Logo />
        <KeyboardAvoidingView behavior="padding">
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
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            desired={TEMP_DESIRED_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currency"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
