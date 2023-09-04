import React, { createContext, useState, useEffect } from "react";
import api from "@/lib/api";
export const PokemonsContext = createContext();

export function PokemonsProvider({ children }) {
    const [pokemonList, setPokemonsToList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [searchTerm, setSearchTerm] = useState("");

    
    
    useEffect(() => {
        async function fetchData() {
            try {
              const response = await api.fetchAllPokemons();
              const newPokemons = response.results.map((item) => {
                const type = item.types.map((itemType) => itemType.type.name);
                return {
                  name: item.name,
                  id: item.id,
                  image: item.image,
                  types: type,
                  url: '/pokemon/'+item.name
                };
              });
              
              setPokemonsToList((prevPokemons) => [...prevPokemons, ...newPokemons]);
            } catch (error) {
              console.error("Erro ao buscar Pokémon da API:", error);
            }
          }
          

        fetchData();
    }, []);

    const searchPokemon = (term) => {
      const filteredPokemons = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      );
      return filteredPokemons;
    };

    return (
        <PokemonsContext.Provider value={{
            pokemonList,
            currentPage,
            searchPokemon
        }}>
            {children}
        </PokemonsContext.Provider>
    );
}
