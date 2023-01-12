import React from "react";
import * as Styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "@components/Button";
import { mealDelete } from "@storage/meal/mealDelete";
import { Alert } from "react-native";
import { MealProps } from "@storage/meal/mealDTO";

export default function MealDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  type RouteParams = {
    meal: MealProps;
  };

  const { meal } = route.params as RouteParams;

  function handleBackPage() {
    navigation.goBack();
  }

  async function deleteMeal() {
    try {
      await mealDelete(meal.id);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteMeal() {
    Alert.alert(
      "Deletar Refeição",
      "Tem certeza que deseja deletar essa refeição?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: deleteMeal,
        },
      ]
    );
  }

  return (
    <Styles.Container diet={meal.insideDiet}>
      <Styles.Header diet={meal.insideDiet}>
        <Styles.BackButton onPress={handleBackPage}>
          <Styles.BackButtonIcon />
        </Styles.BackButton>
        <Styles.Title>Refeição</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <Styles.Name>{meal.name}</Styles.Name>
        <Styles.Description>{meal.description}</Styles.Description>
        <Styles.TimeTitle>Data e hora</Styles.TimeTitle>
        <Styles.Time>
          {meal.date} às {meal.time}
        </Styles.Time>
        {meal.insideDiet === "yes" ? (
          <Styles.DietStatusContainer>
            <Styles.DietStatusColor diet={meal.insideDiet}></Styles.DietStatusColor>
            <Styles.DietStatusText>dentro da dieta</Styles.DietStatusText>
          </Styles.DietStatusContainer>
        ) : (
          <Styles.DietStatusContainer>
            <Styles.DietStatusColor diet={meal.insideDiet}></Styles.DietStatusColor>
            <Styles.DietStatusText>fora da dieta</Styles.DietStatusText>
          </Styles.DietStatusContainer>
        )}
        <Styles.ActionsContainer>
          <Button
            title="Editar Refeição"
            icon="create"
            style={{
              marginBottom: 8,
            }}
          />
          <Button
            title="Excluir Refeição"
            icon="delete"
            type="secondary"
            onPress={handleDeleteMeal}
          />
        </Styles.ActionsContainer>
      </Styles.Body>
    </Styles.Container>
  );
}