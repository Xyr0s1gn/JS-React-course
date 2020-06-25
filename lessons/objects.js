let options = {
  width: 1024,
  height: 768,
  name: 'test',
};

// console.log(options.name);

// Adding data in existing object
options.bool = false;
options.colors = {
  border: 'black',
  bg: 'red',
};

// delete data from object
delete options.bool;

// console.log(options);

// show keys in object by loop

for (let key in options) {
  console.log('Property ' + key + ' has a option ' + options[key]);
}

console.log(Object.keys(options).length);
