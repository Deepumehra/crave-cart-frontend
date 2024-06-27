export const categorizedIngredients = (ingredients) => {
  console.log("Ingredients :", ingredients);
  return ingredients.reduce((acc, ingredient) => {
    console.log("Ingredient :", ingredient);
    if (!ingredient || !ingredient.category) {
      // Skip null ingredients or ingredients without a category
      console.log("Skipping invalid ingredient:", ingredient);
      return acc;
    }

    const { category } = ingredient;
    console.log("Category :", category);
    if (!acc[category.name]) {
      acc[category.name] = [];
    }
    acc[category.name].push(ingredient);
    return acc;
  }, {});
};
