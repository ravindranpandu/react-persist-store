const STORAGE_KEY = 'root';

export const setPersistState = (state) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export const getPersistState = () => {
  const savedState = window.localStorage.getItem(STORAGE_KEY);

  try {
    if (!savedState) {
      return undefined;
    }
    return JSON.parse(savedState ?? '{}');
  } catch (e) {
    console.error('Error loading state : ' + STORAGE_KEY);
    return undefined;
  }
}