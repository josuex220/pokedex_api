import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PokeAPIService from 'App/Services/PokeAPIService'

export default class PokemonsController {
  private pokeAPIService: PokeAPIService;

  constructor() {
    this.pokeAPIService = new PokeAPIService();
  }

  public async index({ response, params }: HttpContextContract) {
    const { page } = params;
    try {
      const pokemon = await this.pokeAPIService.listPokemons(page, 20);

      const updatedResults = await Promise.all(
        pokemon.results.map(async (item) => {
          const idPokemon = parseInt(item.url.split('/api/v2/pokemon/')[1]);
          const infoPokemon = await this.pokeAPIService.findPokemonById(idPokemon);
          return {
            ...item,
            id: idPokemon,
            types: infoPokemon.types,
            image: infoPokemon.sprites.front_default,
          };
        })
      );

      pokemon.results = updatedResults;

      return response.status(200).json(pokemon);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Failed to fetch Pokemon List data' });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const { id } = params;
      const pokemon = await this.pokeAPIService.findPokemon(id);
      return response.json(pokemon);
    } catch (error) {
      return response.status(500).json({ error: 'Failed to fetch Pokemon data' });
    }
  }
}
