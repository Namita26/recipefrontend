import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function IngredientsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      <View style={styles.welcomeContainer}>
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <OptionButton
        icon="md-school"
        label="Cottage Cheese"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      />
      <OptionButton
        icon="md-school"
        label="Tomato"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Onion"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Oil"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Cumin"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Kasuri Methi"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Garam Masala"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Green Capcisum"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Red Capcisum"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Ginger"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Garlic"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Cinnamon"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Green Chilli"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Red Chilli"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Chicken"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Turmeric Powder"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Coriander leaves"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Coriander powder"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Cumin powder"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Salt"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Black Pepper Powder"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Whole wheat bread"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-school"
        label="Cheese"
        //onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=nRPmoioNisI')}
      /><OptionButton
        icon="md-compass"
        label="Red Chilli Powder"
        onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=hgsTcIJW9tc')}
      /><OptionButton
        icon="ios-chatboxes"
        label="Maida"
        onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=P4ld0LGXnb0')}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  button: {
    alignItems: 'bottom',
    backgroundColor: "pink",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
});
