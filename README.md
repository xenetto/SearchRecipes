# Project 1 : Search-For-Recipes

An app for search and find desired recipes by Name, Nutrition, Ingredients or Diet Type and sorting the results based on nutrition.

Utilized: HTML – CSS – Bootstrap – JavaScript – Node.JS – API – GitHub


## References:
```
https://api.spoonacular.com/recipes/complexSearch?minFat=1&maxFat=50&number=5&type=salad&addRecipeInformation=true&apiKey=...

https://api.spoonacular.com/food/ingredients/autocomplete?query=appl&number=5&apiKey=...

https://api.spoonacular.com/recipes/{id}/nutritionWidget?&defaultCss=trueapiKey=...

https://spoonacular.com/food-api/docs#Diets
https://spoonacular.com/food-api/docs#Cuisines
https://spoonacular.com/food-api/docs#Meal-Types
https://spoonacular.com/food-api/docs#Intolerances
https://spoonacular.com/food-api/docs#Search-Recipes-Complex

```

## inputs:
    includeIngredients
    excludeIngredients
    type // type=salad
    diet
    intolerances
    cuisine
    number // of result
    addRecipeInformation=true // if result includes recipes

## outputs:
    id
    title
    dishTypes
    nutrition.title
    nutrition.amount
    nutrition.unit
    analyzedInstructions.name
    analyzedInstructions.number
    analyzedInstructions.step
    image

## features:
    Search by Name
    Search by Nutrition
    Search by Ingredients
    Search by Diet Types
    Sorting the result based on nutrition 
    Handling the paginations
    Call APIs for get step by step recipe instruction

## Next delivery : 
Calculate the BMI and propose the most healthy foods based on customer weight, height, sex and age

Published at : https://xenetto.github.io/SearchRecipes/

