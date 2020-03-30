import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../assets/logo/logo.png";
import ImgNotification from "../../assets/img-notification/img-notification.png";
import { useNavigation } from "@react-navigation/native";

const NotificationActive = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToNotification() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={navigateBack}>
        <Ionicons name="ios-arrow-back" size={28} color="#989898" />
      </TouchableOpacity>
      <Image source={Logo} style={styles.imgLogo} />
      <Image source={ImgNotification} style={styles.imgNotification} />

      <Text style={styles.titleNotification}>Permitir notificação</Text>
      <View style={styles.contTexts}>
        <Text style={styles.textNotification}>
          Para acompanhar seus pedidos e receber novidades
        </Text>
      </View>

      <View style={styles.allButton}>
        <TouchableOpacity style={styles.buttonActive}>
          <Text style={styles.textActive}>Permitir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSkip}
          onPress={navigateToNotification}
        >
          <Text style={styles.textSkip}>Pular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationActive;
