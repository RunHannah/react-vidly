import _ from "lodash";

// to paginate data on the client side
// chaining lodash methods slice, take, value
export function paginate(items, pageNumber, pageSize) {
  console.log("Paginate items", items);
  console.log("Paginate pageNumber", pageNumber);
  console.log("Paginate pageSize", pageSize);

  const startIndex = (pageNumber - 1) * pageSize;

  console.log("Paginate startIndex", startIndex);

  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

// _.slice(items, startIndex);
// _.take();
