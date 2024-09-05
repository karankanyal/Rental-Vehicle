export const AJAX = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    const val = await response.json();
    return val;
  } catch (error) {
    throw error;
  }
};
