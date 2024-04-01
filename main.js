let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;

for (let person in salaries) {
  if (typeof salaries[person] == 'number') {
    sum += salaries[person];
  } else sum = 0;
}

console.log('Total salary:', sum);

// bai 3

let menu1 = {
  width: 200,
  height: 400,
  title: 'My menu',
};

for (let key in menu1) {
  if (typeof menu1[key] == 'number') {
    menu1[key] *= 2;
  }
}
console.log(menu1);
