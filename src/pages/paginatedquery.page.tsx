import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchColors = (page: number) => axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`)

export const PaginatedQueryPage = () => {
    const [page, setPage] = useState(1);

    const { isLoading, isFetching, isError, data: colors, error } = useQuery(["colors", page], () => fetchColors(page), { keepPreviousData: true })

    if (isLoading) return <h2>Loading...</h2>

    if (isError) return <h2>Error: {error}</h2>

    return (
        <div>
            <ul>
                {colors?.data.map((c: any) => <li key={c.id}>{c.label}</li>)}
            </ul>

            {page > 1 && <button onClick={() => setPage(page - 1)}>Previus</button>} &nbsp; <button onClick={() => setPage(page + 1)}>Next</button>

            {isFetching && "Loading..."}
        </div>
    )
}
