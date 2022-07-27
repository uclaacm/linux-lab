import Creation from './../pages/creation';
import Game from './../pages/game';
import Intro from './../pages/intro';
import Moving from './../pages/moving';
import Permissions from './../pages/permissions';
import Piping from './../pages/piping';
import Searching from './../pages/searching';
import Stationary from './../pages/stationary';

/*
  These are just default names, you can change the sections to
  things of your choosing!
*/
export enum HeaderSections {
  DEFAULT_SECTION = 'defaultSection',
  SECONDARY_SECTION = 'secondarySection',
  TERTIARY_SECTION = 'tertiarySection',
}

export const PageMapping: Map<
  string,
  { component: () => JSX.Element; pageName: string }
> = new Map([
  ['/', { component: Intro, pageName: 'Home' }],
  ['/stationary', { component: Stationary, pageName: 'Stationary' }],
  ['/moving', { component: Moving, pageName: 'Moving' }],
  ['/creation', { component: Creation, pageName: 'Creation' }],
  ['/piping', { component: Piping, pageName: 'Piping' }],
  ['/searching', { component: Searching, pageName: 'Searching' }],
  ['/permissions', { component: Permissions, pageName: 'Permissions' }],
  ['/game', { component: Game, pageName: 'Game' }],
]);
