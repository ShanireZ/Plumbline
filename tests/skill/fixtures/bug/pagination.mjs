export function pages(items, size) {
  if (!Number.isInteger(size) || size < 1) throw new RangeError('positive size required');
  const result = [];
  for (let offset = 0; offset < items.length; offset += size) result.push(items.slice(offset, offset + size));
  return result;
}
