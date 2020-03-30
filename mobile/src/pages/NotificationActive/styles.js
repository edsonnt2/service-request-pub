import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: "#fff"
  },
  arrow: {
    width: "100%",
    alignItems: "flex-start"
  },
  imgNotification: {
    marginTop: 70
  },
  titleNotification: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#404040",
    marginTop: 30
  },
  contTexts: {
    width: "100%",
    paddingHorizontal: 28
  },
  textNotification: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    paddingVertical: 15
  },
  allButton: {
    width: "100%",
    position: "absolute",
    bottom: 30
  },
  buttonActive: {
    backgroundColor: "#338B61",
    height: 60,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22
  },
  textActive: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18
  },
  buttonSkip: {
    borderColor: "#338B61",
    borderWidth: 1,
    borderStyle: "solid",
    height: 60,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  textSkip: {
    color: "#338B61",
    fontWeight: "bold",
    fontSize: 18
  }
});
