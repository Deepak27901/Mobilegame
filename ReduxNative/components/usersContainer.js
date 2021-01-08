import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {fetchUsers} from '../Redux/user/userAction';
import {todoList} from '../Redux/todo/todoAction';

const Userscontainer = (props) => {
  const [text, setText] = useState('');

  const renderItem = ({item}) => {
    const {name, city, email} = item;
    return <Item title={name} />;
  };
  useEffect(() => {
    props.fetchUsers();
  }, []);
  const changeValue = (e) => {
    setText(e.nativeEvent.text);
  };

  const addList = () => {
    if(text !== ''){
      props.todoList(text);
    }else{
      alert('Please enter text')
    }
  };
  console.log(props, 'props');
  //let allUser = props.users
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {/* {allUser && allUser.length >0 && allUser.map((item)=>{
                return(
                <Text>{item.name}</Text>
                )
            })} */}
        <Text>
          {props.users &&
            props.users.length > 0 &&
            props.users.map((user) => {
              return <Text>{user.name}</Text>;
            })}{' '}
        </Text>

        {/* <Text>{props.todos&& props.todos.length>0 && props.todos.map(user=>{return (<Text>{ user}</Text>)})} </Text>  */}
        <FlatList
          data={props.users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.textView}>
          <TextInput
            style={{textAlign: 'center'}}
            placeholder="Enter Your Text"
            onChange={changeValue}
          />
        </View>
        <Button title="Add_Todos" onPress={() => addList()} />
        {props.todos &&
          props.todos.length > 0 &&
          props.todos.map((user) => {
            return <Text>{user}</Text>;
          })}
        <View></View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state, 'state');
  return {
    users: state.user.users,
    todos: state.todo.Todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    todoList: (data) => dispatch(todoList(data)),
  };
};
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    height: 40,
    width: 100,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
  },
  textView: {
    borderWidth: 1,
    borderColor: 'red',
    width: 300,
    height: 60,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Userscontainer);
