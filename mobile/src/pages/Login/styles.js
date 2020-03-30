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
  imgLogin: {
    marginTop: 40
  },
  textLogin: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "#404040",
    marginTop: 25,
    paddingHorizontal: 15
  },
  allButton: {
    width: "100%",
    position: "absolute",
    bottom: 30
  },
  textHowConect: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    paddingVertical: 15
  },
  buttonFacebook: {
    backgroundColor: "#475A96",
    height: 56,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 22,
    position: "relative"
  },
  icoFacebook: {
    position: "absolute",
    left: 12
  },
  textFacebook: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18
  },
  bottonButton: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonPhoneEmail: {
    borderColor: "#338B61",
    borderWidth: 1,
    borderStyle: "solid",
    height: 60,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: "45%"
  },
  textPhoneEmail: {
    color: "#338B61",
    fontWeight: "bold",
    fontSize: 18
  }
});
