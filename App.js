import {StyleSheet, View, StatusBar, Button, Image, Text} from 'react-native';
import {useState} from "react";


export default function App() {
  const [isSubscribed, setIsSubscribed] = useState(true);
  return (
      <View style={styles.container}>
        <View style={styles.glow}>


          <Image source={require("./assets/wuhuh.png")} style={styles.icon}></Image>

          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              Huh?
            </Text>
            <Text style={styles.subText}>
              Wuh?
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
                title={isSubscribed ? "Subscribe" : "Unsubscribe"}
                color= { isSubscribed ? "#7020f0" : "#f02070"}
                onPress={() => {
                  console.log('CLICK!!!');
                  setIsSubscribed((prev) => !prev);
                }}
            />
          </View>

          <StatusBar
              barStyle={"dark-content"}
              translucent={true}
              backgroundColor="rgba(0,0,0,0.5)"
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  textContainer:{
    fontFamily: 'sans-serif',
    marginRight: 'auto',
  },
  mainText:{
    fontWeight: "600",
    fontSize: 22
  },
  subText:{
    fontWeight: "300",
    fontSize: 12,
    color: 'grey'
  },
  icon:{
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 'auto',
    marginHorizontal: 15,
    boxShadow: `
      0 0px 5px 1px rgba(219, 10, 132, 0.4),
    `,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 'auto',
    marginVertical: 75
  },
  glow: {
    width: '90%',
    height: 70,
    borderRadius: 20,
    backgroundColor: 'white',
    boxShadow: `
      0 0px 20px 3px rgba(219, 72, 92, 0.3),
      0 0px 30px 4px rgba(219, 72, 92, 0.3)
    `,
    display: "flex",
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonContainer: {
    width: 120,
    borderRadius: 20,
    overflow: 'hidden',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 'auto',
    marginHorizontal: 15,
  }
});