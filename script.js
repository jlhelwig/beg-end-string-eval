// Test.assertEquals(feast("great blue heron", "garlic naan"), true)
// Test.assertEquals(feast("chickadee", "chocolate cake"), true)
// Test.assertEquals(feast("brown bear", "bear claw"), false)

//if a dish begins and ends with the same letters as the beast who brings it, it is true... otherwise false


function feast(beast, dish) {
//your function here
  if (beast.charAt(0)===dish.charAt(0) && beast.charAt(beast.length-1)===dish.charAt(dish.length-1)) {
    return true
  }
  else {
    return false
  };
}


console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
