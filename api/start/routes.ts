/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/


import Route from '@ioc:Adonis/Core/Route'




Route.group(() => {
  Route.get('pokemon/page/:page', 'PokemonsController.index')
  Route.get('pokemon/', 'PokemonsController.index')
  Route.get('pokemon/:id', 'PokemonsController.show')
}).prefix('api')

Route.get('/*', async () => {
  return { 
    getPokemonById: {GET: '/api/pokemon/:id'},
    getPokemonByName: {GET: '/api/pokemon/:name'},
    getListPokemons: {GET: '/api/pokemon'},
    getListPokemonsPage: {GET: '/api/pokemon/page/:page'}
  }
})