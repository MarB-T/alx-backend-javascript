/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let exists = true;
  list.map((x) => {
    if (!set.has(x)) {
      exists = false;
    }
  });

  return exists;
}
