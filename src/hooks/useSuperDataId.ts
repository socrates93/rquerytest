import axios from 'axios';
import { Hero } from '../pages/superheroes.page';
import { useQuery } from 'react-query';

const fetchHero = (id: any) => axios.get<Hero>(`http://localhost:4000/superheroes/${id}`);

export const useSuperDataId = (id: any) => {
    //SE PONE COMO ARREGLO PARA QUE SEA UN KEY UNICO POR HERO Y NO SE VEA EL ANTERIOR AL REHACER REQUEST

    return useQuery(["hero", id], () => fetchHero(id));
}