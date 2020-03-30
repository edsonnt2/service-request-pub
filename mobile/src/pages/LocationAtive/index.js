import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import Logo from "../../assets/logo/logo.png";
import ImgLocation from "../../assets/img-location/img-location.png";
import { useNavigation } from "@react-navigation/native";

const LocationActive = () => {
  const navigation = useNavigation();
  function navigateToLocation() {
    navigation.navigate("NotificationActive");
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imgLogo} />
      <Image source={ImgLocation} style={styles.imgLocation} />

      <Text style={styles.titleLocation}>Permitir localização</Text>
      <View style={styles.contTexts}>
        <Text style={styles.textLocation}>
          Para encontrar bares e restaurantes próximos a você
        </Text>
      </View>

      <View style={styles.allButton}>
        <TouchableOpacity style={styles.buttonActive}>
          <Text style={styles.textActive}>Permitir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSkip}
          onPress={navigateToLocation}
        >
          <Text style={styles.textSkip}>Pular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationActive;
