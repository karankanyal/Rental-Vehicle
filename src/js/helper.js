export const AJAX = async function (url) {
  try {
    const response = await fetch(url);
    const val = await response.json();
    return val;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
