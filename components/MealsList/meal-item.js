import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import MealDetails from "../meal-details";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();

  const mealDetails = { duration, affordability, complexity };
  function pressHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails {...mealDetails} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 6,
  },
  innerContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
