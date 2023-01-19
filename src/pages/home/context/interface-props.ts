import { ChangeEvent, MouseEventHandler } from "react";

export interface HomeContextProps {
  getImageData: (value: string) => void;
  search: string;
  handlerSearch: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export interface HomeProviderProps {
  children: JSX.Element[] | JSX.Element;
}
