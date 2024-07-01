import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, Button, Alert } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Login To Continue</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        placeholder="User Name"
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
      />

      <Button
        title="Login"
        color="#841584"
        onPress={() => Alert.alert('Unable to login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffddff',
    alignItems: 'center',
    paddingTop: 50
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
  },
  title: {
    fontSize: 26,
    fontStyle: 'normal',
  },
});
