var cat_image = document.getElementById('cat'); //document is the webpage
var feed_button = document.getElementById('feed_button');
var slimmer_button = document.getElementById('slimmer_button');

cat_image.addEventListener("click", meow); //first element is the event, the second is the function
feed_button.addEventListener("click", feed);
slimmer_button.addEventListener("click", slimmer);


//Functions
function meow() {
    alert("Meow!");
    console.log('click on the cat!');
};

function feed() {
    cat_image.style.width = (cat_image.offsetWidth + 30.0) + 'px';
    console.log(cat_image.offsetWidth);
};

function slimmer() {
    cat_image.style.width = (cat_image.offsetWidth - 30.0) + 'px';
};

//JSON

var list_of_numbers = [1,2,3];

var cat_object = {
  weight: 5,
  past_weight_values: [4.5,5.1,4.9],
  name: 'Felix'
}

console.log(cat_object);
console.log(cat_object.name);

cat_object.height = 10; // add single element

console.log(cat_object);

var cat_list = [cat_object]; // initializing with the first field being cat_object
cat_list.push({weight : 6 , past_weight_values : [5.9, 5.3, 6.1], name : 'Snowball'});
cat_list.push('new element!'); //array elements usually are consistent 
console.log(cat_list);


var cat_list2 = [cat_object, cat_object]; 
console.log(cat_list2);
cat_list2[0].name='hello';

console.log(cat_list2);

var dog_list = cat_list.map(function(element) {
  //When the map function is called using cat_list.map, 
  	//it loops through all elements in cat_list, 
  	//calls each temporarily element >>first car, second cat and so on
  var dog = {	
    weight: 2* element.weight, //Let's assume dogs weigh twice as much as their feline versions.
    name: 'Doggie ' + element.name
  };
  return dog;
});

console.log(dog_list);


var cat_json = JSON.stringify(cat_list);

console.log([cat_json]);

var new_cat_list= JSON.parse(cat_json);  //De-stringify

console.log(new_cat_list);

//this is another way to called a function, named inline function
//var dog_image = document.getElementById('dog');
//dog_image.addEventListener("click", function() {
  //console.log('clicked on the dog!');
  //woof();
//});

//function woof() {
  //console.log('woof!');
//}
