import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MethodEmail = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToEmail() {
    navigation.navigate("codeConfirm", {
      method: "E-mail",
      valueSended: "edson_nt2@hotmail.com"
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={navigateBack}>
        <Ionicons name="ios-arrow-back" size={28} color="#989898" />
      </TouchableOpacity>

      <Text style={styles.title}>Qual o seu e-mail ?</Text>

      <View style={styles.boxInput}>
        <Text style={styles.topInput}>E-mail</Text>
        <TextInput
          placeholder="seuemail@mail.com"
          style={styles.inputEmail}
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.buttonCode} onPress={navigateToEmail}>
        <Text style={styles.textCode}>Enviar Código</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MethodEmail;
