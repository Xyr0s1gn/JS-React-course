let menuList = document.querySelectorAll('li');
console.log(menuList);

for (var l of menuList) {
  menuList[2].before(menuList[1]);
}

console.log(menuList);
