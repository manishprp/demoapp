import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

function Screen({children, style, isScrollable = false}) {
  if (!isScrollable) {
    return (
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    );
  } else {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <SafeAreaView style={[styles.container, style]}>
          {children}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Screen;
