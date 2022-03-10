import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Globe } from '../src/Globe';

const { useState } = React;
const { useEffect } = React;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      'https://raw.githubusercontent.com/dataarts/webgl-globe/master/globe/population909500.json',
      true
    );
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          setData(data[0][1]);
        }
      }
    };
    xhr.send(null);
  }, []);

  return <Globe data={data} width={800} height={480} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
