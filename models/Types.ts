export type Data = {
  name: string;
};

export type QueryTextState = {
  query: string;
  _id: string;
};

export type SignUpFormValues = {
  username: string;
  email: string;
  password: string;
};

export type SignInFormValues = {
  email: string;
  password: string;
};

export enum MessageType {
  User = 'user',
  Bot = 'bot',
}

export interface IChat {
  id: string;
  message: string;
  type: MessageType;
}

export interface ILastQuery{
  message : string;
  done : boolean;
}