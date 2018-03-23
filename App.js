import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxExample from './Project1/ReduxExample';
import ActiveIndicater from './ActivityIndicator/ActiveIndicater';
import TodoApp from './todos/TodoApp';
import { Counter }  from './counter/component/Counter'
import store from './counter/store/Store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Counter />
      </Provider>
    );
  }
}
