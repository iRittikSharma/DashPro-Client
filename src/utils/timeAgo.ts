/**
 * Calculates the difference in hours between now and a given timestamp.
 * @param timestamp
 * @returns
 */
export function timeAgo(timestamp: string): string {
  const createdDate = new Date(timestamp);

  const now = new Date();

  // Calculate the difference in milliseconds
  const differenceMs = now.getTime() - createdDate.getTime();

  // Convert milliseconds to hours
  const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));

  return `${differenceHours} hr ago`;
}
