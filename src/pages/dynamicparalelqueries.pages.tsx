import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSupes = async (id: number) =>
  axios.get(`http://localhost:4000/superheroes/${id}`);

export const DynamicParalelQueriesPage = ({
  heroIds,
}: {
  heroIds: number[];
}) => {
  const queryResults = useQueries(
    heroIds.map((id) => ({
      queryKey: ['hero', id],
      queryFn: () => fetchSupes(id),
    }))
  );

  console.log(queryResults);

  return <h1>DynamicParalelQueriesPage</h1>;
};
