export function transformPathNameToArrayOfString(inputString: string) {
  const parts = inputString.split('/');
  const transformedArray = parts.map((part, index) => {
    return index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1);
  });
  return transformedArray.filter(Boolean);
}
