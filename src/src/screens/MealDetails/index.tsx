import React from "react";
import * as S from "./styles";
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
    <S.Container diet={meal.insideDiet}>
      <S.Header diet={meal.insideDiet}>
        <S.BackButton onPress={handleBackPage}>
          <S.BackButtonIcon />
        </S.BackButton>
        <S.Title>Refeição</S.Title>
      </S.Header>
      <S.Body>
        <S.Name>{meal.name}</S.Name>
        <S.Description>{meal.description}</S.Description>
        <S.TimeTitle>Data e hora</S.TimeTitle>
        <S.Time>
          {meal.date} às {meal.time}
        </S.Time>
        {meal.insideDiet === "yes" ? (
          <S.DietStatusContainer>
            <S.DietStatusColor diet={meal.insideDiet}></S.DietStatusColor>
            <S.DietStatusText>dentro da dieta</S.DietStatusText>
          </S.DietStatusContainer>
        ) : (
          <S.DietStatusContainer>
            <S.DietStatusColor diet={meal.insideDiet}></S.DietStatusColor>
            <S.DietStatusText>fora da dieta</S.DietStatusText>
          </S.DietStatusContainer>
        )}
        <S.ActionsContainer>
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
        </S.ActionsContainer>
      </S.Body>
    </S.Container>
  );
}
