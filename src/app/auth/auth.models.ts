export class Credentials {
  username!: string;
  initials!: string;
  organization!: string;
  role!: string;
}

export enum Roles {
  'Producer' = 'Producer',
  'Consumer' = 'Consumer'
}
