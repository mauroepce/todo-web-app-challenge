export const serializeArrayObjById = (array) =>
  Object.fromEntries(array.map((item) => [item.id, item]));

export const deserialize = (serializedData) =>
  Object.values(serializedData ?? {});

export const generateId = () => {
  const id = Math.floor(Math.random() * 10000);
  return id;
}