class Api {
    constructor() {
      this.baseURL = 'http://127.0.0.1:3333/api/';
    }
  

    async fetchAllPokemons() {
        try {
          const response = await fetch(`${this.baseURL}pokemon/`);
    
          if (!response.ok) {
            throw new Error('Erro ao buscar Pokémon da API');
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          throw error;
        }
      }
    async fetchByNameOrId(idOrName){
      try {
        const response = await fetch(`${this.baseURL}pokemon/${idOrName}`);
  
        if (!response.ok) {
          throw new Error('Erro ao buscar Pokémon da API');
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
    async fetchData() {
      try {
        const response = await fetch(`${this.baseURL}data`);
  
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
  
        const data = await response.json();
  
        const normalizedData = this.normalizeData(data);
  
        return normalizedData;
      } catch (error) {
        throw error;
      }
    }
  
    normalizeData(data) {
      return data;
    }
  
  }
  
  export default new Api();
  