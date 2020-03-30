import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: "#fff"
  },
  arrow: {
    width: "100%",
    alignItems: "flex-start"
  },
  title: {
    fontSize: 18,
    color: "#444",
    marginTop: 30,
    lineHeight: 24
  },
  textBold: {
    fontWeight: "bold"
  },
  boxInput: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 30
  },
  inputCode: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#5e5e5e",
    borderRadius: 4,
    height: 46,
    width: 48,
    fontSize: 20,
    color: "#333",
    marginRight: 10,
    textAlign: "center"
  },
  notCode: {
    fontSize: 18,
    color: "#C24343",
    paddingVertical: 15
  },
  buttonCode: {
    backgroundColor: "#e1e1e1",
    height: 60,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16
  },
  textCode: {
    fontWeight: "bold",
    color: "#9e9e9e",
    fontSize: 18
  }
});
