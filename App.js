/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const height = Dimensions.get('window').height;

// Common Component for CheckBox
const CheckBox = props => {
  const iconName = props.isChecked
    ? 'checkbox-marked-circle'
    : 'checkbox-blank-circle-outline';
  const iconColor = props.isChecked
    ? props.friends
      ? '#8D65FF'
      : 'orange'
    : '#f3f3f3';
  const titleColor = props.isChecked
    ? props.friends
      ? '#8D65FF'
      : 'orange'
    : 'gray';

  return (
    <View style={styles.checkBox}>
      <Pressable onPress={props.onPress}>
        <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
      </Pressable>
      <Text style={[styles.title, {color: titleColor}]}>{props.title}</Text>
    </View>
  );
};

const App = () => {
  const [oneWalk, setOneWalk] = useState(false);
  const [groupWalk, setGroupWalk] = useState(false);
  const [friends, setFriends] = useState(false);
  const [friendsOfFriends, setFriendsOfFriends] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Walks</Text>
      <View style={styles.selectOption1}>
        <Text style={styles.optionHeadingText}>I'd like to go on a:</Text>
        <View style={styles.optionRow}>
          <View style={styles.singleOption}>
            <CheckBox
              onPress={() => {
                setOneWalk(!oneWalk), setGroupWalk(false);
              }}
              title="One-on-one walk"
              isChecked={oneWalk}
            />
          </View>
          <View style={styles.singleOption}>
            <CheckBox
              onPress={() => {
                setGroupWalk(!groupWalk), setOneWalk(false);
              }}
              title="Group walk"
              isChecked={groupWalk}
            />
          </View>
        </View>
      </View>
      <View style={styles.selectOption1}>
        <Text style={styles.optionHeadingText}>I'd like to walk with:</Text>
        <View style={styles.optionRow}>
          <View style={styles.singleOption}>
            <CheckBox
              onPress={() => {
                setFriends(!friends);
              }}
              title="Friends"
              isChecked={friends}
              friends={true}
            />
          </View>
          <View style={styles.singleOption}>
            <CheckBox
              onPress={() => {
                setFriendsOfFriends(!friendsOfFriends);
              }}
              title="Friends of friends"
              isChecked={friendsOfFriends}
              friends={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'gray',
    margin: 15,
    marginTop: 35,
  },
  selectOption1: {
    padding: 10,
    marginTop: height * 0.03,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  singleOption: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 30,
    marginRight: 20,
  },
  optionText: {
    fontSize: 15,
  },
  optionHeadingText: {
    color: 'gray',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  checkBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    color: 'gray',
    marginLeft: 5,
  },
});

export default App;
