import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSupes = async () => axios.get('http://localhost:4000/superheroes');
const fetchFriends = async () => axios.get('http://localhost:4000/friends');

export const ParalelQueriesPage = () => {
  const {
    isLoading,
    isError,
    isFetching,
    error,
    data: supes,
  } = useQuery('supes', () => fetchSupes());

  const { data: friends } = useQuery('friends', () => fetchFriends());

  if (isLoading || isFetching) return <h2>Loading...</h2>;

  if (isError) return <h2>Error: {error}</h2>;

  return <h1>ParalelQueriesPage</h1>;
};
