import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative"
  },
  MenuTop: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.12
  },
  liMenuTop: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    width: "50%",
    borderColor: "#c8c8c8",
    paddingBottom: 5,
    paddingTop: 15,
    justifyContent: "center"
  },
  borderTextMenuTop: {
    width: "100%",
    borderRightWidth: 1,
    borderColor: "#c8c8c8",
    borderStyle: "solid",
    height: 24,
    justifyContent: "center"
  },
  textLiMenuTop: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#686868"
  },
  searchTop: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e7e7e7",
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
    borderRadius: 4,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 18
  },
  icoSearch: {
    marginLeft: 4
  },
  inputSearch: {
    marginLeft: 5,
    color: "#333",
    fontSize: 18,
    width: "88%"
  },
  // unica mudança na página de home
  titleHome: {
    color: "#292929",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 12,
    marginBottom: 10
  },
  categoryHome: {
    flexDirection: "row",
    marginBottom: 20,
    paddingLeft: 5
  },
  boxCategoryHome: {
    alignItems: "center",
    marginLeft: 6
  },
  textCategoryHome: {
    color: "#4f4f4f",
    fontSize: 14,
    marginTop: 3
  },
  boxNearbyLocation: {
    marginBottom: 48
  },
  liNearbyLocation: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#e1e1e1",
    marginHorizontal: 12,
    paddingVertical: 10
  },
  boxLogoLocation: {
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e9e9e9",
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 2
  },
  imgLogoLocation: {
    height: "100%",
    width: "100%"
  },
  titleNearbyLocation: {
    color: "#2b2b2b",
    fontSize: 16,
    fontWeight: "500"
  },
  infNearbyLocation: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 1,
    alignItems: "center"
  },
  textStars: {
    fontWeight: "500",
    fontSize: 13,
    color: "#E4BA36",
    marginLeft: 2
  },
  textLocation: {
    fontSize: 12,
    color: "#545454"
  },
  borderInfLocation: {
    marginHorizontal: 3,
    paddingHorizontal: 3,
    borderColor: "#d5d5d5",
    borderStyle: "solid",
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
  textOpenClose: {
    fontWeight: "bold",
    color: "#238E5B",
    fontSize: 11
  },
  MenuFixBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#cdcdcd",
    shadowRadius: 42,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.28,
    shadowColor: "#5b5b5b"
  }
});
