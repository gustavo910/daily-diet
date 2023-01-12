import React from "react";
import { useState, useCallback } from "react";
import * as Styles from "./styles";
import LogoImg from "@assets/logo.png";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import { FlatList } from "react-native";
import MealCard from "@components/MealCard";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealListProps, MealProps } from "@storage/meal/mealDTO";

export default function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealListProps[]>([]);
  const [dietPercentage, setDietPercentage] = useState("0");

  function handleNewMeal() {
    navigation.navigate("NewMeal");
  }

  function handleCalculateDietPercentage(data: MealProps[]) {
    if (data.length === 0) return setDietPercentage("100");
    const totalMeals = data.length;
    const insideDietMeals = data.filter(
      (meal) => meal.insideDiet === "yes"
    ).length;
    const percentage = (insideDietMeals / totalMeals) * 100;
    if (percentage.toString().length > 4) {
      return setDietPercentage(percentage.toFixed(2));
    } else {
      setDietPercentage(percentage + "");
    }
  }

  function handleGroupMealsByDate(data: MealProps[]) {
    setMeals(
      data.reduce((acc: MealListProps[], meal) => {
        const date = meal.date;
        const mealExists = acc.find((item) => item.date === date);
        if (mealExists) {
          mealExists.meals.push(meal);
        } else {
          acc.push({
            date,
            meals: [meal],
          });
        }
        acc.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        return acc;
      }, [])
    );
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      handleGroupMealsByDate(data);
      handleCalculateDietPercentage(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <Styles.Logo source={LogoImg} />
        <Styles.UserIcon />
      </Styles.HeaderContainer>
      <Highlight percentage={dietPercentage} />
      <Styles.TitleMeals>Refeições</Styles.TitleMeals>
      <Button title="Nova Refeição" icon="add" onPress={handleNewMeal} />

      <FlatList
        style={{ marginTop: 8 }}
        data={meals}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <>
            <Styles.DateMeal>{item.date}</Styles.DateMeal>
            <FlatList
              data={item.meals}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MealCard
                  title={item.name}
                  time={item.time}
                  insideDiet={item.insideDiet}
                  onPress={() =>
                    navigation.navigate("MealDetails", { meal: item })
                  }
                />
              )}
            />
          </>
        )}
        ListEmptyComponent={
          <Styles.EmptyContainer>
            <Styles.EmptyText>Cadastre agora sua primeira refeição!</Styles.EmptyText>
            <Styles.EmptyText>É rápido e fácil!</Styles.EmptyText>
            <Styles.EmptyText>😉</Styles.EmptyText>
          </Styles.EmptyContainer>
        }
      />
    </Styles.Container>
  );
}
