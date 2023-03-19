import { useEffect, useState } from "react";

const usePages = (allGames, page, typePag) => {
  const [gamesToShow, setGamesToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (allGames.length > 0 && Array.isArray(allGames)) {
      setGamesToShow(allGames.slice(page, page + typePag));
      setIsLoading(false);
    }
  }, [allGames, page, typePag]);

  return { gamesToShow, isLoading };
};

export default usePages;
