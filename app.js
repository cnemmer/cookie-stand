var hourOperation = ['location/times', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'Daily Total'];
var locat = ["Pike Place", "SeaTac", "Southcenter", "Bellevue", "Alki"];

var CookieStand = function(placeName, minCustHour, maxCustHour, avgCookiesCust)  {
  this.placeName = placeName;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.hourCookiePer = [];

this.randCustHour = function() {
	return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour;
};
	
this.totalCookieHour = function() {
	return Math.floor(this.randCustHour() * this.avgCookiesCust);
 };

this.cookieBake = function() {
 	var counter = 0;
 	for(var i = 1; i < hourOperation.length; i++) {
 		var bake = this.totalCookieHour();
 		counter += bake;
 		this.hourCookiePer.push(bake); 
 	}
 	return counter;
};

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
  //add td that contains the daily total
  td.textContent = this.cookieBake();
  tr.appendChild(td); 
};

this.cookieBake();
this.store();	
 
}

var hoursOp =function() {
  var table = document.getElementById('cookieSales');
  for(var i =0; i < hourOperation.length; i++) {
  	var th = document.createElement('th');
  	th.textContent = hourOperation[i];
  	table.appendChild(th);
  	console.log(th);
 	}
};

hoursOp();	


var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2); //, 'bake', 'total');
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2); //, 'bake', 'total');
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9); //, 'bake', 'total');
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3); //, 'bake', 'total');
var alki = new CookieStand('Alki Beach', 3, 24, 2.6); //, 'bake', 'total');	






 /*this.counter = function(id) {	
  	var counter = 0;
		for(var i = 0; i < hourOperation.length; i++) {
			var bake = this.totalCookieHour();
			counter += bake; 
	  	var list = document.getElementById(id);
	  	var item = document.createElement("td");
	  	var text = document.createTextNode(bake);
	  	item.appendChild(text);
	  	list.appendChild(item);
	  }
	  	var item = document.createElement("td");
	  	var text = document.createTextNode(counter);
	  	item.appendChild(text);
	  	list.appendChild(item);
	 };

	    this.counter(this.id);
	    this.store()
} */




