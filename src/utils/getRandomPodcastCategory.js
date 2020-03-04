import { PODCAST_CATEGORIES } from '@/utils/constants';

/**
 * Gets a random podcast category
 */
export const getRandomPodcastCategory = () => {
  const offSet = Math.floor(Math.random() * PODCAST_CATEGORIES.length);
  return PODCAST_CATEGORIES[offSet];
};
