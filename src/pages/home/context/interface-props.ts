import { ChangeEvent } from "react";

export interface HomeContextProps {
  getImageData: () => void;
  handlerSearch: (evt: ChangeEvent<HTMLInputElement>) => void;
  visibleImg: string[] | undefined;
  handleLoadMore: () => void;
}

export interface returnImgApiNasa {
  data: {
    collection: {
      items: [{ links: [{ href: string; id: string }] }];
    };
  };
}

export interface HomeProviderProps {
  children: JSX.Element[] | JSX.Element;
}
