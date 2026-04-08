export const publicRoute = {
  home: '/',
  characters: '/characters',
  character: (character: string): string => `/characters/${character}`,
  episodes: '/episodes',
  episode: (episode: string): string => `/episodes/${episode}`,
  locations: '/locations',
  location: (location: string): string => `/location/${location}`,
  login: '/login',
};
