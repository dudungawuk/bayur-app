import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import logo from './../../Images/logo.png'

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.replace('OnBoarding');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000)
    );
  render() {
    return (
      <View style={{ flex:1,  backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={logo} resizeMode="contain" style={{ height: 311,width:314}} />
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};