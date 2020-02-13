
let nutritionArr = [];
let analyzedInstructionsArr = [];

let imageAdd;

let settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.spoonacular.com/recipes/complexSearch?minFat=1&maxFat=50&number=2&type=salad&addRecipeInformation=true&apiKey=7be734db65ca420487a133024e247177",
	"method": "GET"
	}


$.ajax(settings).then(getResponse);

$.ajax(settings).fail(getError);


function getResponse( response ){
    console.log(`<.Then> callback <${response}>`);console.log(response);
    let resultsCounter = 0;
    while (resultsCounter<response.results.length){
        console.log(`Id is : ${response.results[resultsCounter].id}`);
        console.log(`Title is : ${response.results[resultsCounter].title}`);
        console.log(`Dish Types : ${response.results[resultsCounter].dishTypes}`);
        nutritionArr = response.results[resultsCounter].nutrition; 
            console.log(`Nutrition Title : ${nutritionArr[0].title}`); 
            console.log(`Nutrition Amount : ${nutritionArr[0].amount}`); 
            console.log(`Nutrition Unit : ${nutritionArr[0].unit}`); 
        analyzedInstructionsArr = response.results[resultsCounter].analyzedInstructions; 
            console.log(`analyzedInstructions Name : ${analyzedInstructionsArr[0].name}`); 
            let analyzedInstructionsCounter=0;
            console.log("AAAAAAAAAAAA");
            console.log(analyzedInstructionsArr);
            console.log(analyzedInstructionsArr.length);
            
            let stepsCounter = 0;
            while (analyzedInstructionsCounter<analyzedInstructionsArr.length){
                while(analyzedInstructionsCounter<analyzedInstructionsArr[analyzedInstructionsCounter].steps.length){
                    console.log(`analyzedInstructions Steps(number) : ${analyzedInstructionsArr[analyzedInstructionsCounter].steps[stepsCounter].number}`);
                    console.log(`analyzedInstructions Steps(step) : ${analyzedInstructionsArr[analyzedInstructionsCounter].steps[stepsCounter].step}`);
                    stepsCounter = stepsCounter + 1;
                }
                analyzedInstructionsCounter = analyzedInstructionsCounter + 1;
                stepsCounter = 0;
            }

           
            
        imageAdd= response.results[0].image; console.log(`Image is : ${imageAdd}`); 
        document.querySelector("#imgTest").setAttribute("src", imageAdd);
        resultsCounter = resultsCounter + 1;
    }

    
    
   
}
function getError( errorStatus ) {
    console.log(`<.Fail> callback <${errorStatus}>`);
}

