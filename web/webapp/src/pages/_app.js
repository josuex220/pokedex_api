import React from 'react';
import { PokemonsProvider } from '@/contexts/PokemonsContext';
import '../public/styles/globals.css';
function App({ Component, pageProps }) {
  return (
    <PokemonsProvider>
      <Component {...pageProps} />
    </PokemonsProvider>
  );
}

export default App;
