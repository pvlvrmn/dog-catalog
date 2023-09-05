export function capitilize(names: Array<string>) {
  const result: Array<string> = [];
  if (names.length === 0) {
    return [];
  }
  console.log(names);
  for (const sub of names) {
    console.log(sub);
    const subDone = sub[0].toUpperCase() + sub.substr(1);
    result.push(subDone);
  }

  return result;
}

export function capitilizeWord(name: string) {
  const result = name[0].toUpperCase() + name.substr(1);
  return result;
}

export const flattenObject = (obj: object) => {
  const result: Array<string> = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value.length > 0) {
      result.push(key);
    } else {
      result.push(key);
    }
  }
  return result;
};

export default { capitilize, capitilizeWord, flattenObject };
