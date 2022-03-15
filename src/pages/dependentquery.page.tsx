import axios from 'axios';
import { useQuery } from 'react-query';

interface User {
  id: string;
  channelId: string;
}

const fetchUserByEmail = (email: string) => axios.get<User>(`http://localhost:4000/users/${email}`)


const fetchCoursesByChannelId = (channelId?: string) => axios.get(`http://localhost:4000/channels/${channelId}`)


export const DependentQueryPage = ({ email }: { email: string }) => {

  const { isLoading, isError, isFetching, error, data: user } = useQuery(["user", email], () => fetchUserByEmail(email));

  const channelId = user?.data.channelId;

  const { data: channel } = useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), { enabled: !!channelId });

  if (isLoading || isFetching) return <h2>Loading...</h2>;

  if (isError) return <h2>Error: {error}</h2>;

  return <h1>DependentQueryPage {channel?.data.courses.join(", ")}</h1>;
};
