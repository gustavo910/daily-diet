import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { CreateMealProps, MealProps } from './mealDTO';

export async function mealCreate(meal: CreateMealProps) {
    try {
        const storedMeals = await mealsGetAll();

        // set newMeal id
        const newMeal = meal as MealProps;
        newMeal.id = storedMeals.length + 1 + "" as string;

        const storage = JSON.stringify([...storedMeals, newMeal]);

        console.log(storage);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}