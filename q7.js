function formatName(firstName, lastName) {
  let first = firstName.trim();
  let last = lastName.trim();

  let formattedFirst = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
  let formattedLast = last.toUpperCase();

  return formattedLast + ", " + formattedFirst;
}

console.log(formatName(" Amarachi ", " okoro "));