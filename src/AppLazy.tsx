import React, { useLayoutEffect, useState } from 'react';
import {gql, useQuery, useLazyQuery} from '@apollo/client';

const TEST_QUERY = gql`
  query Teste { 
    test {
      message 
    }
  }
`;

function App() {

    const [test, setTest] = useState('');
    const [ getTest, {loading, data} ] = useLazyQuery(TEST_QUERY);

    useLayoutEffect(() => {
        if(data && data.test) {
            setTest(data.test.message);
        }
    }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        { loading && <p>Carregando...</p> }

        { test && 
          <h5>{ test }</h5>
        }

        <button onClick={() => getTest()} className="btn btn-small">
          (query)
        </button>

      </header>
    </div>
  );
}

export default App;
