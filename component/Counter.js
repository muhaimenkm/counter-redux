import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './Styles';
import { increment, decrement } from '../actions/actions';

 export class Counter extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity onPress={this.props.incrementCounter} style={styles.btn}>
                <Text style={styles.txt}> + </Text>
            </TouchableOpacity>
            <View style={styles.result}>
              <Text style={styles.txt}> {this.props.val} fghf </Text>
            </View>
            <TouchableOpacity onPress={this.props.decrementCounter} style={styles.btn}>
                <Text style={styles.txt}> - </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) =>({

  val : state.CounterReducer.count
});

const mapDispatchToProps = (dispatch) =>({
  incrementCounter : () => dispatch(increment),
  decrementCounter : () => dispatch(decrement)
});

export default connect({mapStateToProps,mapDispatchToProps})(Counter);
