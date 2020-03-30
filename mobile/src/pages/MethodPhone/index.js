import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import IcoBr from "../../assets/ico-br/ico-br.png";
import { useNavigation } from "@react-navigation/native";

const MethodPhone = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToPhone(method) {
    navigation.navigate("codeConfirm", {
      method,
      valueSended: "(99) 9 9999-9999"
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={navigateBack}>
        <Ionicons name="ios-arrow-back" size={28} color="#989898" />
      </TouchableOpacity>

      <Text style={styles.title}>Qual o seu número de celular ?</Text>

      <View style={styles.allInput}>
        <View style={styles.boxCountry}>
          <Image source={IcoBr} />
          <Text style={styles.textBr}>+55</Text>
        </View>

        <View style={styles.boxInput}>
          <Text style={styles.topInput}>celular</Text>
          <TextInput
            placeholder="(00) 0 0000-0000"
            style={styles.inputPhone}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <Text style={styles.text}>Como deseja receber seu código ?</Text>

      <TouchableOpacity
        style={styles.buttonCode}
        onPress={() => navigateToPhone("Whatsapp")}
      >
        <Text style={styles.textCode}>Receber por Whatsapp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonCode}
        onPress={() => navigateToPhone("SMS")}
      >
        <Text style={styles.textCode}>Receber por SMS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MethodPhone;
