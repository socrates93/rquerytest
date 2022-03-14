import { Outlet, useNavigate } from 'react-router-dom';
import { useSuperData } from '../hooks/useSuperData';
import { Hero } from './superheroes.page';

export const RQSuperHeroesPage = () => {
  const navigate = useNavigate();

  const onSuccess = (data: any) => {
    console.log('Success', data);
  };

  const onError = (error: any) => {
    console.log('Error', error);
  };

  const { data, isLoading, error, isError, isFetching, refetch } = useSuperData(
    { onSuccess, onError }
  );

  console.log(isLoading, isFetching);

  if (isLoading || isFetching) return <h2>Loading...</h2>;

  if (isError) return <h2>{(error as any).message}</h2>;

  return (
    <>
      <h1>RQ Super Heroes Page</h1>
      <hr />
      <button onClick={() => refetch()}>Fetch Heroes</button>

      {data.data?.map((hero: Hero) => (
        <div
          key={hero.id}
          onClick={() => navigate(`/rq-super-heroes/${hero.id}`)}
        >
          {hero.name}
        </div>
      ))}

      <Outlet />
    </>
  );
};
