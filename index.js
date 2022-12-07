// create a new Map object to store the word counts
// First, define a function that takes in a list of items and a target item,
// and returns a list of items that are similar to the target item.
function recommend(items, target) {
  // Start with an empty list of recommendations.
  var recommendations = [];

  // Loop through the list of items.
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    // If the current item is not the target item, check if it is similar
    // to the target item, and if so, add it to the list of recommendations.
    if (item !== target && isSimilar(item, target)) {
      recommendations.push(item);
    }
  }

  // Return the list of recommendations.
  return recommendations;
}

// Next, define a function that takes in two items and returns true if they
// are similar, and false otherwise. This function can use any criteria you
// choose to determine similarity (e.g. common properties, shared categories, etc.).
function isSimilar(item1, item2) {
  // For the sake of this example, we'll say that two items are similar if
  // they have at least one common property.
  for (var property in item1) {
    if (item2.hasOwnProperty(property) && item1[property] === item2[property]) {
      return true;
    }
  }

  return false;
}

var items = [{ name: "item1", category: "books", author: "author1" }, { name: "item2", category: "books", author: "author2" }, { name: "item3", category: "movies", director: "director1" }, { name: "item4", category: "music", artist: "artist1" }, { name: "item5", category: "music", artist: "artist2" }];

// Find similar items for "item1".
var recommendations = recommend(items, items[1]);

// Print the recommendations.
console.log(recommendations);  // [{ name: "item2", category: "books", author: "author2" }]