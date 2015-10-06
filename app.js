var hourOperation = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var CookieStand = function(placeName, minCustHour, maxCustHour, avgCookiesCust, id)  {
	this.placeName = placeName;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.id = id;

	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour;
	};
	
	this.totalCookieHour = function() {
		return Math.floor(this.randCustHour() * this.avgCookiesCust);
	};
  
  this.counter = function(id) {	
  	var counter = 0;
		for(var i = 0; i < hourOperation.length; i++) {
			var bake = this.totalCookieHour();
			counter += bake; 
	  	var list = document.getElementById(id);
	  	var item = document.createElement("li");
	  	var text = document.createTextNode(hourOperation[i] + " : Bake " + bake + " Cookies");
	  	item.appendChild(text);
	  	list.appendChild(item);
	  }
	  	var item = document.createElement("li");
	  	var text = document.createTextNode("Total " + counter + " Cookies");
	  	item.appendChild(text);
	  	list.appendChild(item);
	 };

	 this.dayTotal = function() {
	 	return this.totalCookieHour + hourOperation.length;
	 }

   this.counter(this.id);
   this.dayTotal();
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, 'pike');
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, 'seaTac');
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, 'southCenter');
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3, 'bellSQ');
var alki = new CookieStand('Alki Beach', 3, 24, 2.6, 'alki');

console.log(pikePlace);
console.log(seaTac);
console.log(southcenter);
console.log(bellevueSquare);
console.log(alki);








