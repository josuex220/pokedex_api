export default class PokeAPIService {
  private baseURL = 'https://pokeapi.co/api/v2/'

  public async get(endpoint: string): Promise<any> {
    try {
      const response = await fetch(this.baseURL + endpoint)
      if (!response.ok) {
        throw new Error('Failed to fetch data from PokeAPI')
      }
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Failed to fetch data from PokeAPI')
    }
  }

  public async findPokemon(idOrName : string): Promise<any>{
    return await Number.isInteger(idOrName) ? this.findPokemonById(parseInt(idOrName)) : this.findPokemonByName(idOrName); 
  }

  public async findPokemonById(id: number): Promise<any> {
    const endpoint = `pokemon/${id}`
    return this.get(endpoint)
  }

  public async findPokemonByName(name: string): Promise<any> {
    const endpoint = `pokemon/${name}`
    return this.get(endpoint)
  }


  public async listPokemons(page = 1, itemsPerPage = 10000): Promise<any> {
    const offset = (page - 1) * itemsPerPage
    const endpoint = `pokemon?offset=${offset}&limit=${itemsPerPage}`
    return this.get(endpoint)
  }
  
}
