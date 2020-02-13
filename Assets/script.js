


// https://spoonacular.com/food-api/console#Profile
// b588453d88164a63a6b235e77276dcd0
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=b588453d88164a63a6b235e77276dcd0",
	"method": "GET"
	}


$.ajax(settings).then(function (response) {
	console.log(response);
});



