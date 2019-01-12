import _ from 'lodash';

// to paginate data on the client side
// chaining lodash methods slice, take, value
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

// _.slice(items, startIndex);
// _.take();
