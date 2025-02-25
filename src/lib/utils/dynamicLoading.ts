import { dataLayerConfig } from '../analytics/config';

interface LoadingOptions {
  trackingEnabled?: boolean;
  retryAttempts?: number;
  retryDelay?: number;
}

interface LoadError extends Error {
  message: string;
}

export const dynamicLoad = async <T>(
  loadFn: () => Promise<T>,
  options: LoadingOptions = {}
): Promise<T> => {
  const {
    trackingEnabled = true,
    retryAttempts = 3,
    retryDelay = 1000,
  } = options;

  const startTime = Date.now();
  let attempts = 0;

  const attemptLoad = async (): Promise<T> => {
    try {
      attempts++;
      const data = await loadFn();

      if (trackingEnabled) {
        const loadTime = Date.now() - startTime;
        // @ts-ignore
        window.dataLayer?.push(dataLayerConfig.featureInteraction(
          'dynamic_loading',
          'success',
          { loadTime, attempts }
        ));
      }

      return data;
    } catch (error) {
      if (attempts < retryAttempts) {
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return attemptLoad();
      }

      if (trackingEnabled) {
        const err = error as LoadError;
        // @ts-ignore
        window.dataLayer?.push(dataLayerConfig.featureInteraction(
          'dynamic_loading',
          'error',
          { error: err.message, attempts }
        ));
      }

      throw error;
    }
  };

  return attemptLoad();
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(src => preloadImage(src)));
}; 