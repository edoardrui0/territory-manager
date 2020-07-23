export const get = itemKey => {
  try {
    const item = localStorage.getItem(itemKey);
    if (item === null) {
      return undefined;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const set = (itemKey, itemData) => {
  try {
    const serializedData = JSON.stringify(itemData);
    localStorage.setItem(itemKey, serializedData);
  } catch (error) {
    console.error(error);
  }
};

export const remove = itemKey => {
  try {
    localStorage.removeItem(itemKey);
  } catch (error) {
    console.error(error);
  }
};
