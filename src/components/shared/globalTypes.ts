/*
  These are just default names, you can change the sections to
  things of your choosing!
*/
export enum HeaderSections {
  DEFAULT_SECTION = 'defaultSection',
  SECONDARY_SECTION = 'secondarySection',
  TERTIARY_SECTION = 'tertiarySection',
}

export const PageMapping: Map<string, string> = new Map([
  ['/', 'Home'],
  ['/stationary', 'Stationary'],
  ['/moving', 'Moving'],
  ['/creation', 'Creation'],
  ['/piping', 'Piping'],
  ['/searching', 'Searching'],
  ['/permissions', 'Permissions'],
  ['/game', 'Game'],
]);
