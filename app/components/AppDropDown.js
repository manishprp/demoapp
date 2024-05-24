import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {color} from '../config';

function AppDropDown({items = [], placeHolder, onChangeValue}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [itemsHere, setItems] = useState([...items]);

  return (
    <View
      style={{
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: color.medium,
        borderRadius: 30,
      }}>
      <DropDownPicker
        style={{
          backgroundColor: color.medium,
          borderWidth: 0,

          marginHorizontal: 10,
          alignSelf: 'center',
          borderRadius: 30,
        }}
        open={open}
        value={value}
        items={itemsHere}
        placeholder="Select Blood Type"
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={onChangeValue}
        zIndex={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AppDropDown;
