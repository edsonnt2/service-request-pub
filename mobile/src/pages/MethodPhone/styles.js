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
    marginTop: 30
  },
  allInput: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 30
  },
  boxCountry: {
    backgroundColor: "#e1e1e1",
    borderRadius: 3,
    height: 46,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  textBr: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#505050",
    paddingLeft: 5
  },
  boxInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#5e5e5e",
    borderRadius: 4,
    height: 46,
    width: "70%",
    justifyContent: "center",
    position: "relative"
  },
  topInput: {
    position: "absolute",
    left: 12,
    top: -10,
    color: "#4f4f4f",
    fontSize: 14,
    backgroundColor: "#fff",
    paddingHorizontal: 1
  },
  inputPhone: {
    fontSize: 20,
    color: "#333",
    marginLeft: 10
  },
  text: {
    fontSize: 18,
    color: "#606060",
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
