export const loadState = <T> (key: string): T | undefined => {
  try {
    const jsonState = localStorage.getItem(key);
    if (!jsonState) {
      return;
    }

    return JSON.parse(jsonState);
  } catch (error) {
    console.log(error);
    return;
  }
};

export const saveState = <T>(state: T, key: string) => {
  try {
    const stringState = JSON.stringify(state);
    localStorage.setItem(key, stringState);
  } catch (error) {
    console.log(error);
  }
};
