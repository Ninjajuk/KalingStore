// apiFunctions.js

async function fetchDataFromAPI(category) {
    try {
      const resp = await fetch(`http://localhost:3030/products/category/${category}`);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }
  
  export { fetchDataFromAPI };
  