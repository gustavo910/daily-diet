import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealDelete(id: string) {
    try {
        const storedMeals = await mealsGetAll();

        // remove the stored meal from id
        const newMeals = storedMeals.filter((meal) => meal.id !== id);

        console.log(newMeals);

        const storage = JSON.stringify(newMeals);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}