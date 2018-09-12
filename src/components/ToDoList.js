import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { todoFetch } from '../actions';
import ListItem from './ListItem';

class ToDoList extends Component {
  componentWillMount() {
    //console.log(this.props);
    this.props.todoFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ todolist }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(todolist);
  }

  renderRow(todo) {
    return <ListItem todo={todo} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}



const mapStateToProps = state => {
  const todolist = _.map(state.todolist, (val, uid) => {
    return { ...val, uid };
  });

  return { todolist };
};

export default connect(mapStateToProps, { todoFetch })(ToDoList);