import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { Fragment } from 'react';

const fetchColors = ({ pageParam = 1 }) => axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)

export const InfiniteQueryPage = () => {
    const { isLoading, isFetching, isError, data: colors, error, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(["colors"], fetchColors, {
        getNextPageParam: (lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1;
            } else {
                return undefined;
            }
        }
    })

    if (isLoading) return <h2>Loading...</h2>

    if (isError) return <h2>Error: {error}</h2>

    return (
        <div>
            <ul>
                {colors?.pages.map((group: any, index: number) =>
                    <Fragment key={index}>
                        {
                            group.data.map((color: any) => <li key={color.id}>{color.label}</li>)
                        }
                    </Fragment>
                )}
            </ul>

            <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>Load More</button>

            {isFetching && !isFetchingNextPage && "Loading..."}
        </div>
    )
}
