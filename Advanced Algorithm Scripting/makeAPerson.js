// Fill in the object constructor with the following methods below:
//
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
//
// The methods that take an argument must accept only one argument and it has to be a string.
//
// These methods must be the only available means of interacting with the object.
//
// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

var Person = function(firstAndLast){

    var name = firstAndLast;
    // Complete the method below and implement the others similaryly
    this.getFirstName = function(){
        var firstName = name.split(" ");
        return firstName[0];
    };
    this.getLastName = function(){
        var lastName = name.split(" ");
        return lastName[1];
    };
    this.getFullName = function(){
        return name;
    };
    this.setFirstName = function(first){
        var newFirst = name.split(" ");
        newFirst[0] = first;
        name = newFirst.join(" ");
        return name;
    };
    this.setLastName = function(last){
        var newLast = name.split(" ");
        newLast[1] = last;
        name = newLast.join(" ");
        return name;
    };
    this.setFullName = function(firstAndLast){
        name = firstAndLast;
        return name;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
