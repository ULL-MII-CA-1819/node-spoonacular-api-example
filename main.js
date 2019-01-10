const unirest = require('unirest');

const API_KEY = "btSAgzlS6CmshxyNyEh24vDF8sl2p1w43h9jsnCABHsQZSfxx6";
const INGREDIENT_LIST = ['bananas', 'apples', 'cheese', 'crackers'];

let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/find" +
    "ByIngredients?number=5&ranking=1&ingredients=";

const ingredientsString = INGREDIENT_LIST.map(ingredient =>
    ingredient + '%2C'
);

requestString = requestString + ingredientsString;

unirest.get(requestString)
    .header("X-RapidAPI-Key", API_KEY)
    .end(result => {
        if (result.status === 200) {
            getRecipeData(result.body);
        };
    });

function getRecipeData(recipeList) {
    let idList = [];
    recipeList.map(recipe =>
        idList.push(recipe.id)
    );
    let recipeString = idList.join('%2C');
    let requestString = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=';
    requestString = requestString + recipeString
    try {
        unirest.get(requestString)
            .header("X-RapidAPI-Key", API_KEY)
            .end(result => {
                console.log(result);
                if (result.status === 200) {
                    result.body.map(result =>
                        console.log(result.title + " -- " + "Weight Watchers Smart Points: " + result.weightWatcherSmartPoints + " -- Instructions: " + result.instructions)
                    );
                };
            });
    } catch (e) {
        throw (e);
    }
};