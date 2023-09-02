import React from 'react';
import { PokemonsProvider } from '@/contexts/PokemonsContext';
function App({ Component, pageProps }) {
  return (
    <PokemonsProvider>
      <Component {...pageProps} />
    </PokemonsProvider>
  );
}

export default App;
