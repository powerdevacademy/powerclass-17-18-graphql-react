import React, { useEffect, useState } from 'react';
import {gql, useQuery} from '@apollo/client';

const TEST_QUERY = gql`
  query Teste { 
    test {
      message 
    }
  }
`;

function App() {
  const { loading, error, data, startPolling, stopPolling } = useQuery(TEST_QUERY);

  return (
    <div className="App">
      <header className="App-header">
        { loading && <p>Carregando...</p> }
        { error && <p>Erro: {error.message}</p> }

        {!error && !loading && 
          <h5>{ data.test?.message  }</h5>
        }

        <button onClick={() => startPolling(1000)} className="btn btn-small">
          (startPolling)
        </button>

        <button onClick={() => stopPolling()} className="btn btn-small">
          (stopPolling)
        </button>

      </header>
    </div>
  );
}

export default App;
