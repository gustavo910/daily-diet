export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            NewMeal: undefined;
            MealDetails: {
                meal: MealProps;
            }
        }
    }
}

type MealProps = {
    id: string;
    name: string;
    description: string;
    date: string;
    time: string;
    insideDiet: DietProps;
}

type DietProps = "yes" | "no";