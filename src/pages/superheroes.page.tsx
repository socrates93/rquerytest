import { useEffect, useState } from 'react';

import axios from 'axios';

export interface Hero {
  id: number;
  name: string;
  alterEgo: string;
}

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Hero[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get<Hero[]>(
          'http://localhost:4000/superheroes'
        );

        setData(resp.data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h1>Super Heroes Page</h1>
      {data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};
