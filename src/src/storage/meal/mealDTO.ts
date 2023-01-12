export type DietProps = "yes" | "no";

export type CreateMealProps = {
    name: string;
    description: string;
    date: string;
    time: string;
    insideDiet: DietProps;
};

export type MealProps = {
    id: string;
    name: string;
    description: string;
    date: string;
    time: string;
    insideDiet: DietProps;
};

export type MealListProps = {
    meals: MealProps[];
    date: string;
};