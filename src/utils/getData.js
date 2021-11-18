//const API= 'https://randomuser.me/api/?results=5000'
const API = "https://randomuser.me/api/?page=3&results=10&seed=abc";

export const getData = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Generated error", error);
  }
};
