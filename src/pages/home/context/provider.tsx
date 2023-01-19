import { ChangeEvent, MouseEventHandler, useState } from "react";
import { HomeContext } from ".";
import { HomeProviderProps } from "./interface-props";

export function HomeProvider({ children }: HomeProviderProps) {
  const [search, setSearch] = useState("");

  const getImageData = (value: string) => {
    console.log(value);
  };
  const handlerSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    const valueParams = (evt?.target as HTMLInputElement).value;
    setSearch(valueParams);
  };

  return (
    <HomeContext.Provider value={{ getImageData, search, handlerSearch }}>
      {children}
    </HomeContext.Provider>
  );
}
