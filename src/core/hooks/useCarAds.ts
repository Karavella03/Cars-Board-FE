import { useState, useEffect } from 'react';
import { ICarAd } from '../interfaces/ICarAd';

interface IUseCarAdsHook {
  loading: boolean;
  hasError: boolean;
  carAds: ICarAd[] | null;
  //createCarAd: (carAd: ICarAd) => void
}

const useCarAds = (needFetch?: boolean): IUseCarAdsHook => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [carAds, setCarAds] = useState<ICarAd[] | null>(null);

  const fetchCarAds = async () => {
    setLoading(true);
    try {
        const response = await fetch('http://192.168.50.128:5000/main');
        if (!response.ok) {
            throw new Error(response.statusText)
          }
          const content = await response.json()
          setCarAds(content)
    } catch (error) {
        setHasError(true)
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!carAds && !loading && !hasError && needFetch) {
      fetchCarAds();
    }
  }, [carAds, loading, hasError, needFetch]);

  return {
    loading,
    hasError,
    carAds,
  };
};

export default useCarAds;
