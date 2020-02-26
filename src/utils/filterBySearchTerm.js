import { compose, filter, isEmpty } from 'ramda';

export const filterBySearchTerm = (term, dictionary) => {
  if (isEmpty(term)) {
    return [...dictionary];
  }

  return compose(filter((track) => track.trackName.toLowerCase().includes(term)))(dictionary);
};
