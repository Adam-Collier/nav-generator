const createTemplate = data => {
  let categories = [];
  let dropDownLists = [];

  let chunk = (array, chunk) => {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, chunk));
    }
    return results;
  };

  // loop through each array in the data
  data.forEach((x, i) => {
    // push each category to the categories array
    categories.push(`
      <div class="catz" data-id="category-${i}">
        <a href="${x[0].link}">
          <h5>${x[0].title}</h5>
        </a>
      </div>`);

    // remove the first object in the array as these are used for the main nav links
    x.shift();
    // don't create a dropdown for categories that don't have dropdown items
    if (x.length) {
      // get all of the links with the data interpolated
      let links = x.map(
        obj => `
            <li>
              <a href="${obj.link}">${obj.title}</a>
            </li>`
      );

      // create array of links in chunks of 10
      let chunkedLinks = chunk(links, 10);

      // map each array and wrap in ul tags
      chunkedLinks = chunkedLinks
        .map(
          x => `
          <ul>${x.join("")}
          </ul>`
        )
        .join("");

      // push each dropdown to the dropDownLists array
      // loop through each arrays objects
      dropDownLists.push(`
      <div class="drop category-${i}">
        <div class="list">${chunkedLinks}
        </div>
      </div>`);
    }
  });

  return `
<div class="megaNav">
  <div class="cont">
    <div class="underline"></div>
    <div class="flex">${categories.join("")}
    </div>
    <div class="dropdown-container">${dropDownLists.join("")}
    </div>
  </div>
</div>
`;
};

module.exports = {
  createTemplate
};
