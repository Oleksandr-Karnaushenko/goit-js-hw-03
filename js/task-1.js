function slugify(title) {
  const titleLowerCase = title.toLowerCase();
  const strToArr = titleLowerCase.split(' ');
  const slug = strToArr.join('-');
  //   const slug = title.toLowerCase().split(' ').join('-');
  return slug;
}

// як краще? через 2-3 змінних чи все в 1 рядку?

console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
