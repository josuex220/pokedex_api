import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';
import Footer from '@/components/Footer';
import CustomHead from '@/components/CustomHead';
import Search from '@/components/Search';
import CardItem from '@/components/CardItem';
import api from '@/lib/api';
import { useParams } from 'react-router-dom';


const DetailsPokemon = ({}) => {
    const [search, setSearch] = useState('');
    const [infoDetail, setInfoDetails]= useState([]);
      const router = useRouter();
      const { nome_id } = router.query;


      useEffect(() => {
        const fetchPokemonDetails = async () => {
          if (nome_id) {
            try {
              const details = await api.fetchByNameOrId(nome_id);
              const type = details.types.map((itemType) => itemType.type.name);

              setInfoDetails([{
                name: details.name,
                id: details.id,
                image: details.sprites.front_default,
                types: type
              }]); 
            } catch (error) {
              console.error('Erro ao buscar detalhes do Pokémon:', error);
            }
          }
        };
    
        fetchPokemonDetails();
      }, [nome_id]);
    
  return (
    <div>
      <CustomHead />
      <main>
        <h2 className='h2Details'>Detalhes do Pokemon</h2>
        <div className='listPokemons'>
            {
                infoDetail.map((item) => (
                    <CardItem image={item.image} url={'/pokemon/'} id={item.id} types={item.types} info={item} />
                ))
            }
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetailsPokemon;
