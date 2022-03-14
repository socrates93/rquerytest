import { useParams } from 'react-router-dom';
import { useSuperDataId } from '../hooks/useSuperDataId';

export const RQSuperDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching, isError, error } = useSuperDataId(id);

  if (isLoading || isFetching) return <h2>Loading...</h2>;

  if (isError) return <h2>Error: {error}</h2>;

  return <pre>{JSON.stringify(data?.data, null, "\n")}</pre>;
};
