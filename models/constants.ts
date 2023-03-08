export interface IObjectTypes {
  [key: string]: string;
}

export interface ITeamMembers {
  [key: string]: {
    fullName: string;
    position: string;
  };
}
