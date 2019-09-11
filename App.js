import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uri: 'https://picsum.photos/200'
    };
  }
  onButtonRand = () => {
    let url = fetch('https://picsum.photos/200').then(response =>   this.setState({ uri: response["url"]}));
    console.log(this.state.uri)
  };

  render() {
  let Image_Http_URL ={ uri: this.state.uri };

    return (
      <View style={styles.MainContainer}>
        <Image source={Image_Http_URL} style={styles.image}/>
        <TouchableOpacity
          onPress={this.onButtonRand}
          activeOpacity={0.6}
          style={[styles.button, { backgroundColor: "indianred" }]}
        >
          <Text style={styles.buttonText}>GET RANDOM IMAGE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    width: "60%",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 100,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  counterText: {
    fontSize: 50,
    color: "#000"
  },
  image: {
    height: 200,
    width: 200
  }
});
