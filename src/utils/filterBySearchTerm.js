import { compose, filter, isEmpty } from 'ramda';

export const filterBySearchTerm = (term, dictionary) => {
  if (isEmpty(term)) {
    return [...dictionary];
  }
  const termSanitized = term.toLowerCase().trim();
  return compose(filter((track) => track.trackName.toLowerCase().includes(termSanitized)))(
    dictionary,
  );
};
