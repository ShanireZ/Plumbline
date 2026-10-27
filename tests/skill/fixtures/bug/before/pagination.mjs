export function pages(items, size) {
  if (!Number.isInteger(size) || size < 1) throw new RangeError('positive size required');
  const result = [];
  let offset = 0;
  do {
    result.push(items.slice(offset, offset + size));
    offset += size;
  } while (offset < items.length);
  return result;
}
