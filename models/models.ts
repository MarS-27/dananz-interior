export interface IObject {
  [key: string]: string;
}

export interface ITeamMembers {
  [key: string]: {
    fullName: string;
    position: string;
  };
}

export interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export type PageNameProps = {
  pageName: string;
};
