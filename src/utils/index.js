/**
 * Sanitizes a given text
 * @param {String} text
 */
export const sanitizeText = (text) => (text ? text.trim() : '');

export function dateTimeToPlayTime(progress) {
  const dateTime = new Date(0);
  dateTime.setSeconds(progress);
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const seconds = dateTime.getSeconds().toString().padStart(2, '0');
  const currentTime = `${minutes}:${seconds}`;
  return currentTime;
}
