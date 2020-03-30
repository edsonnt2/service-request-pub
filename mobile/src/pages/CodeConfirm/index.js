import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const CodeConfirm = () => {
  const navigation = useNavigation();
  const {
    params: { method, valueSended }
  } = useRoute();
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
      <Text style={styles.title}>
        Digite o código de 5 dígitos que enviamos por {method} para{" "}
        <Text style={styles.textBold}>{valueSended}</Text>
      </Text>

      <View style={styles.boxInput}>
        <TextInput style={styles.inputCode} keyboardType="number-pad" />
        <TextInput style={styles.inputCode} keyboardType="number-pad" />
        <TextInput style={styles.inputCode} keyboardType="number-pad" />
        <TextInput style={styles.inputCode} keyboardType="number-pad" />
        <TextInput style={styles.inputCode} keyboardType="number-pad" />
      </View>

      <TouchableOpacity style={styles.arrow} onPress={() => {}}>
        <Text style={styles.notCode}>Não recebi meu código</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCode} onPress={() => {}}>
        <Text style={styles.textCode}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CodeConfirm;
