var str1 = "I Love gomycode .";
var count_spaces = 0;
var count_vowels = 0;

const Test = (str) => {
  while (str[i] !== ".") {
    if (str[i] == " ") count_spaces++;
    if (
      str[i].lowercase() == "a" ||
      str[i].lowercase() == "e" ||
      str[i].lowercase() == "o" ||
      str[i].lowercase() == "u" ||
      str[i].lowercase() == "i"
    )
      count_vowelsl++;
  }
};
test(str1);
