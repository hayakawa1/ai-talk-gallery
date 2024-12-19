import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll<T>(
  initialItems: T[],
  fetchMore: () => Promise<T[]>,
  options = { threshold: 0.5 }
) {
  const [items, setItems] = useState<T[]>(initialItems);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          try {
            const newItems = await fetchMore();
            if (newItems.length === 0) {
              setHasMore(false);
            } else {
              setItems(prev => [...prev, ...newItems]);
            }
          } catch (error) {
            console.error('Error fetching more items:', error);
          } finally {
            setIsLoading(false);
          }
        }
      },
      options
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, fetchMore, options]);

  return {
    items,
    isLoading,
    hasMore,
    observerTarget
  };
} 