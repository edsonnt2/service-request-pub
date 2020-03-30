import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../assets/logo/logo.png";
import ImgStreet from "../../assets/street-bars/street-bars.png";
import icoFacebook from "../../assets/ico-facebook/ico-facebook.png";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToLogin(method) {
    navigation.navigate(method);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={navigateBack}>
        <Ionicons name="ios-arrow-back" size={28} color="#989898" />
      </TouchableOpacity>
      <Image source={Logo} style={styles.imgLogo} />
      <Image source={ImgStreet} style={styles.imgLogin} />

      <Text style={styles.textLogin}>
        Falta pouco para encontrar seus ambientes favoritos e ser melhor
        atendido ;)
      </Text>

      <View style={styles.allButton}>
        <Text style={styles.textHowConect}>Como deseja se conectar ?</Text>

        <TouchableOpacity
          style={styles.buttonFacebook}
          onPress={() => navigateToLogin("home")}
        >
          <Image source={icoFacebook} style={styles.icoFacebook} />
          <Text style={styles.textFacebook}>Facebook</Text>
        </TouchableOpacity>

        <View style={styles.bottonButton}>
          <TouchableOpacity
            style={styles.buttonPhoneEmail}
            onPress={() => navigateToLogin("methodPhone")}
          >
            <Text style={styles.textPhoneEmail}>Celular</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonPhoneEmail}
            onPress={() => navigateToLogin("methodEmail")}
          >
            <Text style={styles.textPhoneEmail}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
