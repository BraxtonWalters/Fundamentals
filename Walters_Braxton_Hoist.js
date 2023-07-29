
// 1).
console.log(hello); 
var hello = 'world';
// var hello
// logs undefined
// hello is set to "world"

// 2).
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// needle is set to "haystack"
// test function is called
// create the test function
// set needle to "magnet"
// console.log needle and we get "magnet"

// 3).
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

console.log(brendan);
}
console.log(brendan);
// brendan is set to "super cool"
// we never call the functions so...
// we console.log brendan and get "super cool"

// 4).
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// set a variable food to "chicken"
// log food and get "chicken"
// call the eat function
// create eat function
// set food to "half-chicken"
// log food get "half-chicken"
// set food to "gone"

// 5).
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean is anchored 2 lines below
// so this fails bc js doesn't think mean is a function

// 6).
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// undefined
// rock
// r&b
// disco

// 7).
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// san jose
// seattle
// burbank
// san jose

// 8).
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {}; // this is big big problem || make this a let and life = good
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // bc you will get here and it will breaky breaky!!!
    }
    return dojo;
}
// this will break bc you can not change a const data type!!!
// if you make the const a let you make the worky worky 
