function firstNonRepeatedChar(str) {
 // Write your code here
	 // Create an empty object to store character counts
  const charCount = {};

  // Loop through the string and count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;


	for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charCount[char] === 1) {
      return char;
    }


	}

  // If no non-repeated character is found, return null or a message
  return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
if (result !== null) {
  alert(`${result}`);
} else {
  alert("null");
}