import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import MealDetails from "@screens/MealDetails";
import NewMeal from "@screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="MealDetails" component={MealDetails} />
    </Navigator>
  );
}
