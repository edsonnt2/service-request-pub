import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

import imgDrinks from "../../assets/img-drinks/img-drinks.png";
import imgPizza from "../../assets/img-pizza/img-pizza.png";
import imgMeat from "../../assets/img-meat/img-meat.png";
import imgShow from "../../assets/img-show/img-show.png";
import imgJaponese from "../../assets/img-japonese/img-japonese.png";
import imgHappyHour from "../../assets/img-happy-hour/img-happy-hour.png";
import imgBarDaLeo from "../../uploads/bar-da-leo.png";

const Home = () => {
  const data = [
    {
      category: {
        img: imgShow,
        title: "Show ao vivo"
      }
    },
    {
      category: {
        img: imgJaponese,
        title: "Japonesa"
      }
    },
    {
      category: {
        img: imgDrinks,
        title: "Bebidas"
      }
    },
    {
      category: {
        img: imgPizza,
        title: "Pizza"
      }
    },
    {
      category: {
        img: imgHappyHour,
        title: "Happy Hour"
      }
    },
    {
      category: {
        img: imgMeat,
        title: "Carnes"
      }
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.MenuTop}>
        <View style={[styles.liMenuTop, { borderColor: "#238E5B" }]}>
          <View style={styles.borderTextMenuTop}>
            <Text style={[styles.textLiMenuTop, { color: "#238E5B" }]}>
              Lista
            </Text>
          </View>
        </View>
        <View style={styles.liMenuTop}>
          <Text style={styles.textLiMenuTop}>Mapa</Text>
        </View>
      </View>

      {/* unica mudança nas páginas */}

      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.searchTop}>
              <Feather
                name="search"
                size={24}
                color="#238E5B"
                style={styles.icoSearch}
              />
              <TextInput
                style={styles.inputSearch}
                placeholder="Procure por locais"
              />
            </View>
            <Text style={styles.titleHome}>Categorias</Text>

            <View style={{ flexDirection: "row" }}>
              <FlatList
                style={styles.categoryHome}
                horizontal
                data={data}
                keyExtractor={({ img }, index) => String(index)}
                showsHorizontalScrollIndicator={false}
                renderItem={({
                  item: {
                    category: { img, title }
                  }
                }) => (
                  <View style={styles.boxCategoryHome}>
                    <Image source={img} />
                    <Text style={styles.textCategoryHome}>{title}</Text>
                  </View>
                )}
              />
            </View>
            <Text style={styles.titleHome}>
              Locais que estão próximo a você
            </Text>
          </>
        }
        style={styles.boxNearbyLocation}
        showsVerticalScrollIndicator={false}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={location => String(location)}
        renderItem={({ item }) => (
          <View style={styles.liNearbyLocation}>
            <View style={styles.boxLogoLocation}>
              <Image source={imgBarDaLeo} style={styles.imgLogoLocation} />
            </View>

            <View>
              <Text style={styles.titleNearbyLocation}>Bar da Léo</Text>

              <View style={styles.infNearbyLocation}>
                <FontAwesome name="star" size={12} color="#E4BA36" />
                <Text style={styles.textStars}>5,0</Text>
                <View style={styles.borderInfLocation}>
                  <Text style={styles.textLocation}>Bebidas</Text>
                </View>
                <Text style={styles.textLocation}>0,1 km</Text>
              </View>

              <Text style={styles.textOpenClose}>ABERTO AGORA</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.MenuFixBottom}>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="home" size={25} color="#585858" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="search" size={25} color="#b4b4b4" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="star" size={25} color="#b4b4b4" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="user" size={25} color="#b4b4b4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
