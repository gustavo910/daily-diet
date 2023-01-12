import Button from "@components/Button";
import Input from "@components/Input";
import React from "react";
import { useState } from "react";
import * as Styles from "./styles";
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
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton onPress={handleBackPage}>
          <Styles.BackButtonIcon />
        </Styles.BackButton>
        <Styles.Title>Nova Refeição</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <Input label="Nome" onChangeText={setName} />
        <Input
          label="Descrição"
          height={150}
          onChangeText={setDescription}
          multiline
        />
        <Styles.TimeContainer>
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
        </Styles.TimeContainer>
        <Styles.QuestionContainer>
          <Styles.Label>Está dentro da dieta?</Styles.Label>
          <Styles.OptionsContainer>
            <Styles.Option
              color="green"
              response={onDiet}
              onPress={() => setOnDiet("yes")}
            >
              <Styles.OptionStatusColor color="green"></Styles.OptionStatusColor>
              <Styles.OptionText>Sim</Styles.OptionText>
            </Styles.Option>
            <Styles.Option
              color="red"
              response={onDiet}
              onPress={() => setOnDiet("no")}
            >
              <Styles.OptionStatusColor color="red"></Styles.OptionStatusColor>
              <Styles.OptionText>Não</Styles.OptionText>
            </Styles.Option>
          </Styles.OptionsContainer>
        </Styles.QuestionContainer>
        <Button
          title="Cadastrar refeição"
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: 24,
          }}
          onPress={handleSaveMeal}
        />
      </Styles.Body>
    </Styles.Container>
  );
}