export interface Ingredient {
    icon: string;
    label: string;
    id: number;
  }
  
  export const allIngredients = [
    { icon: "💻", label: "Descrição da Empresa", id: 0 },
    { icon: "🛒", label: "Nossos serviços", id: 1 },
    { icon: "🚀", label: "Vem com a gente!", id: 2 },
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  