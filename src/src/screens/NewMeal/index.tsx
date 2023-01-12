import Button from "@components/Button";
import Input from "@components/Input";
import React from "react";
import { useState } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@storage/meal/mealCreate";
import { Alert } from "react-native";
import { DietProps } from "@storage/meal/mealDTO";

export default function NewMeal() {
  // state to onDiet with options 'yes' or 'no'
  type DietStatus = "yes" | "no" | "none";
  const [onDiet, setOnDiet] = useState<DietStatus>("none");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigation = useNavigation();

  function handleBackPage() {
    navigation.goBack();
  }

  async function handleSaveMeal() {
    // if name, description, date, time === "", return
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      date.trim().length === 0 ||
      time.trim().length === 0 ||
      onDiet === "none"
    ) {
      Alert.alert("Nova refeição", "Preencha todos os campos");
      return;
    }

    try {
      await mealCreate({
        name,
        description,
        date,
        time,
        insideDiet: onDiet as DietProps,
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert("Nova refeição", "Não foi possível salvar a nova refeição");
      console.log(error);
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onPress={handleBackPage}>
          <S.BackButtonIcon />
        </S.BackButton>
        <S.Title>Nova Refeição</S.Title>
      </S.Header>
      <S.Body>
        <Input label="Nome" onChangeText={setName} />
        <Input
          label="Descrição"
          height={150}
          onChangeText={setDescription}
          multiline
        />
        <S.TimeContainer>
          <Input
            label="Data"
            width={48}
            keyboardType="number-pad"
            onChangeText={setDate}
          />
          <Input
            label="Hora"
            width={48}
            keyboardType="number-pad"
            onChangeText={setTime}
          />
        </S.TimeContainer>
        <S.QuestionContainer>
          <S.Label>Está dentro da dieta?</S.Label>
          <S.OptionsContainer>
            <S.Option
              color="green"
              response={onDiet}
              onPress={() => setOnDiet("yes")}
            >
              <S.OptionStatusColor color="green"></S.OptionStatusColor>
              <S.OptionText>Sim</S.OptionText>
            </S.Option>
            <S.Option
              color="red"
              response={onDiet}
              onPress={() => setOnDiet("no")}
            >
              <S.OptionStatusColor color="red"></S.OptionStatusColor>
              <S.OptionText>Não</S.OptionText>
            </S.Option>
          </S.OptionsContainer>
        </S.QuestionContainer>
        <Button
          title="Cadastrar refeição"
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: 24,
          }}
          onPress={handleSaveMeal}
        />
      </S.Body>
    </S.Container>
  );
}
