const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all")

request.send(null)

request.onload = function(){
	const res = JSON.parse(request.responseText);

	for(i of res)
	{
	
	console.log(`Flag---> ${i["flag"]}`)	
	console.log(`Country---> ${i["name"]["common"]}`)	
	console.log(`Region---> ${i["region"]}`)	
	console.log(`Subregion---> ${i["subregion"]}`)	
	console.log(`Population---> ${i["population"]}`)	
	}
	
}

