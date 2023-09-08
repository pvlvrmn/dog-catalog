function capitilize(names: Array<string>) {
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

function capitilizeWord(name: string) {
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

export const getBreeds = async () => {
  const data = await fetch('https://dog.ceo/api/breeds/list/all', {
    method: 'GET',
  });
  const jsonData = await data.json();
  const rawData = await flattenObject(jsonData.message);
  const result = await rawData.map((x) => capitilizeWord(x));
  return result;
};

export const getSubBreeds = async (data: string) => {
  const dataBreeds = await fetch(`https://dog.ceo/api/breed/${data.toLowerCase()}/list`, {
    method: 'GET',
  });
  const jsonData = await dataBreeds.json();
  const result = await capitilize(jsonData.message);
  return result;
};

export const getImages = async (imgs: Array<string>, data: string, isChanged: boolean = false) => {
  if (data.length !== 0) {
    const dataImages = await fetch(`https://dog.ceo/api/breed/${data.toLowerCase()}/images/random/3`, {
      method: 'GET',
    });
    const jsonData = await dataImages.json();
    if (isChanged) {
      return jsonData.message;
    }
    return [...imgs, ...jsonData.message];
  }
  return [];
};

export default { getBreeds, getSubBreeds, getImages };
