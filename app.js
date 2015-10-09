

var hourOperation = ['location/times', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
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
		var cookies = this.randCustHour(this.maxCustHour, this.minCustHour);
		return Math.floor(this.randCustHour() * this.avgCookiesCust);
		this.totalCookieHour.push(this.hourCookiePer);
	};
  


  this.hoursOp =function() {
  	var table = document.getElementById('cookieSales');
  	for(var i =0; i < hourOperation.length; i++) {
  	  var th = document.createElement('th');
  	  th.textContent = hourOperation[i];
  	  table.appendChild(th) 
  	}
  };

	this.store = function()	{	
 		for(var i = 0; i < locat.length; i++)  {
 		var tr = document.createElement('tr');
 		tr.textContent = this.totalCookieHour();
 		table.appendChild(tr);
	 }
	};
		


 this.store();	
 this.hourOP();	



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




