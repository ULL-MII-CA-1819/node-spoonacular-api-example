# Must be subscribed for this example to work. Have to put card data
curl -X POST --include 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/classify?locale=en_us' \
  -H 'X-Mashape-Key: btSAgzlS6CmshxyNyEh24vDF8sl2p1w43h9jsnCABHsQZSfxx6' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  --data-binary '{"title":"Kroger Vitamin A & D Reduced Fat 2% Milk","upc":"","plu_code":""}'
