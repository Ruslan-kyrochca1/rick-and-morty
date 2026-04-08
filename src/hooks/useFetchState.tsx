import axios from 'axios';
import { useEffect, useState } from 'react';
import type { CharacterType, EpisodeType, LocationType } from '../types/types';

type ResourceName = 'character' | 'location' | 'episode';

type useFetchStateProps = {
  name: ResourceName;
};

type ResourceMap = {
  character: CharacterType;
  location: LocationType;
  episode: EpisodeType;
};

export function useFetchState<T extends ResourceName>({ name }: useFetchStateProps) {
  type Item = ResourceMap[T];
  const [fetchState, setFetchState] = useState<Item[]>([]);
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [indexLastItem, setIndexLastItem] = useState(0);
  const loadMore = () => {
    if (isLoading) return;
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    setFetchState([]);
    setPageNumber(1);
  }, [name]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<{ results: Item[] }>(`https://rickandmortyapi.com/api/${name}`, { params: { page: pageNumber } });
        setFetchState((prev) => [...prev, ...response.data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [name, pageNumber]);
  useEffect(() => {
    setIndexLastItem(fetchState.length);
  }, [fetchState.length]);
  return { fetchState, error, isLoading, loadMore, indexLastItem };
}
