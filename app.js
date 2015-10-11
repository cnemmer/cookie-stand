var hourOperation = ['location/times', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'Daily Total'];
var locat = ["Pike Place", "SeaTac", "Southcenter", "Bellevue", "Alki"];

//Established Function Constructor called CookieStand.

var CookieStand = function(placeName, minCustHour, maxCustHour, avgCookiesCust)  {
  this.placeName = placeName;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.hourCookiePer = [];
//Function to generate a random customer calculation.
	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour;
	};
//Function to generate how many cookies per hour.		
	this.totalCookieHour = function() {
		return Math.floor(this.randCustHour() * this.avgCookiesCust);
	 };
//Function to calculate the total cookies that were baked in a day.
	this.cookieBake = function() {
	 	var counter = 0;
	 	for(var i = 1; i < hourOperation.length; i++) {
	 		var bake = this.totalCookieHour();
	 		counter += bake;
	 		this.hourCookiePer.push(bake); 
	 	}
	 	return counter;
	};
//Function to add a Store Location to the table
	this.store = function()	{	
		var table = document.getElementById('cookieSales');
		var tr = document.createElement('tr');
		tr.textContent = this.placeName; 
		table.appendChild(tr); 
		for(var i = 0; i < this.hourCookiePer.length; i++)  {
			var td = document.createElement('td');
			td.textContent = this.hourCookiePer[i];
			tr.appendChild(td);
	  }
	  //add table data tags that contains the daily total
	  td.textContent = this.cookieBake();
	  tr.appendChild(td); 
	};
	this.cookieBake();
	this.store();	
}
//Function to populate the table header.
var hoursOp =function() {
  var table = document.getElementById('cookieSales');
  for(var i =0; i < hourOperation.length; i++) {
  	var th = document.createElement('th');
  	th.textContent = hourOperation[i];
  	table.appendChild(th);
  	console.log(th);
 	}
};
//Function to hold my default Cookie Stores.
var setupDefaultStores = function (){
	var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2); 
	var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
	var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
	var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3); 
	var alki = new CookieStand('Alki Beach', 3, 24, 2.6); 	
}
//Function that ties in my HTML form.
var formContent = function() { 
	var loc = document.getElementById('location').value;
	var minCust = document.getElementById('minCust').value;
	var maxCust = document.getElementById('maxCust').value;
	var aveCookie = document.getElementById('aveCookie').value;
	var arr = new CookieStand(loc, minCust, maxCust, aveCookie);
//clear values in table.
	document.getElementById("location").value = "";
	document.getElementById('minCust').value = "";
	document.getElementById('maxCust').value = "";
	document.getElementById('aveCookie').value = "";
}
	
//Two ways to set up event handlers/future reference.
/*
document.addEventListener('DOMContentLoaded', function() {
  hoursOp();
  setupDefaultStores();
})
*/
var loadInitialContent = function (){
	hoursOp();
	setupDefaultStores();
};
document.addEventListener('DOMContentLoaded', loadInitialContent);
//Set up for the submit button
var submitButton = document.getElementById("submit");
submitButton.onclick = formContent;

	
