import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const Casillas = () => {
  const DATA = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Jorge_%C3%81lvarez_M%C3%A1ynez_2024.jpg",
      nombre: "Jorge Álvarez Maynez",
      partido:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Logo_Partido_Movimiento_Ciudadano_%28M%C3%A9xico%29.svg/320px-Logo_Partido_Movimiento_Ciudadano_%28M%C3%A9xico%29.svg.png",
      namePartido: "Movimiento Ciudadano",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Claudia_Sheinbaum_%28cropped%2C_centered%29.jpg/640px-Claudia_Sheinbaum_%28cropped%2C_centered%29.jpg",
      nombre: "Claudia Sheinbaum Pardo",
      partido:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Morena_logo_%28alt%29.svg/2048px-Morena_logo_%28alt%29.svg.png",
      namePartido: "MORENA",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/1/16/X%C3%B3chitl_G%C3%A1lvez_mayo_2024_%28cropped%29.jpg",
      nombre: "Xóchitl Gálvez",
      partido:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/PAN_logo_%28Mexico%29.svg/800px-PAN_logo_%28Mexico%29.svg.png",
      namePartido: "Partido Acción Nacional",
    },
  ];

  const Item = ({ img, nombre, partido, namePartido }) => (
    <View style={styles.itemCont}>
      <View style={styles.imgItemCont}>
        <Image source={{ uri: img }} style={styles.imgCandidato} />
      </View>
      <View style={styles.infoItemCont}>
        <View style={styles.nameCandidatoCont}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            {nombre}
          </Text>
        </View>
        <View style={styles.partidoInfoCont}>
          <View style={styles.imgPartidoCont}>
            <Image source={{ uri: partido }} style={styles.imgPartido} />
          </View>
          <View style={{ width: 160, alignItems: "center" }}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              {namePartido}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.mainCont}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>Casillas</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            img={item.img}
            nombre={item.nombre}
            partido={item.partido}
            namePartido={item.namePartido}
          />
        )}
      />
    </View>
  );
};

export default Casillas;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1E1E1",
  },
  titleCont: {
    width: "90%",
    marginTop: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  itemCont: {
    width: width * 0.9,
    height: 150,
    backgroundColor: "#666666",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 18,
    borderRadius: 8,
    margin: 20,
  },
  nameCandidatoCont: {
    width: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  imgItemCont: {
    height: 150,
    width: 110,
    borderRadius: 10,
  },
  imgCandidato: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  infoItemCont: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  imgPartidoCont: {
    width: 60,
    height: 60,
  },
  imgPartido: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  partidoInfoCont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
