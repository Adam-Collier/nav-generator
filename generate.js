let generate = data => {
  let arr = [];
  let objArr = [];

  data.forEach((x, i) => {
    x.forEach((item, index) => {
      i % 2 ? (objArr[index].link = item) : objArr.push({ title: item });
    });
    if (i % 2) {
      arr.push(objArr);
      objArr = [];
    }
  });

  return arr;
};

module.exports = {
  generate
};
