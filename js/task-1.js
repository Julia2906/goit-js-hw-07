const categoriesList = document.querySelector('#categories');

const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categoties: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemCount}`);
});
