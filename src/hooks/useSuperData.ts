import axios from 'axios';
import { useQuery } from 'react-query';

import { Hero } from '../pages/superheroes.page';

interface HookProps {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
}

const fetchSupes = () => axios.get<Hero[]>('http://localhost:4000/superheroes');

export const useSuperData = ({ onSuccess, onError }: HookProps) =>
  useQuery('super', fetchSupes, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => data.data.map((hero) => hero.name),
  });
