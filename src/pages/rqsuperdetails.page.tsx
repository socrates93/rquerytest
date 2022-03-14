import { useParams } from 'react-router-dom';

export const RQSuperDetails = () => {
  const { id } = useParams();

  return <div>RQSuperDetails {id}</div>;
};
