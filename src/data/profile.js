import personalInfo from './profile.json';

const firstName = personalInfo.firstName ?? '';
const lastName = personalInfo.lastName ?? '';

export const displayName = [firstName, lastName].filter(Boolean).join(' ');
export const shortName = `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase();
export const promptUser = `${(firstName || 'dev').toLowerCase()}@portfolio`;

export default {
  ...personalInfo,
  displayName,
  shortName,
  promptUser,
};
