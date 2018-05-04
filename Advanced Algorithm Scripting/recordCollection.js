// You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.
// Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.
// If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
// Your function must always return the entire collection object.
// There are several rules for handling incomplete data:
// If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
// If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
// If value is empty (""), delete the given prop property from the album.

// Hints
// Use bracket notation when accessing object properties with variables.
// Push is an array method you can read about on Mozilla Developer Network.
// You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.

// After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"
// After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element.
// After updateRecords(2548, "artist", ""), artist should not be set
// After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.
// After updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element.
// After updateRecords(2548, "tracks", ""), tracks should not be set


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

    // GET CURRENT ALBUM TITLE
    var currentAlbum = collectionCopy[id];
    console.log(currentAlbum);

    if(prop !== "tracks" && value !== ""){
        collection[id][prop] = value;
    } else if(value === ""){
        delete collection[id][prop];
    } else if(prop === "tracks" && collection[id][prop] === undefined){
        collection[id][prop] = [];
        collection[id][prop].push(value);
    } else if(prop === "tracks" && collection[id][prop] !== undefined){
        collection[id][prop].push(value);
    }

    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
