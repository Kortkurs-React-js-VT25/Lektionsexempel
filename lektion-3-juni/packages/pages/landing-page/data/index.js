export const useData = () => {
  return {
    async fetchQuote() {
      try {
        const URL = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(URL);
        return await response.json();
      } catch (error) {
        console.error(error);
      }
    },
  };
};
