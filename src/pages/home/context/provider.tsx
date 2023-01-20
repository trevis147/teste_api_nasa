import { ChangeEvent, useState } from "react";
import { HomeContext } from ".";
import { HomeProviderProps, returnImgApiNasa } from "./interface-props";
import { searchImageNasa } from "./service";

export function HomeProvider({ children }: HomeProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [imageLiks, setImageLiks] = useState<string[]>([]);
  const [visibleImg, setVisibleImg] = useState<string[]>([]);

  const getImageData = async () => {
    const ret = (await searchImageNasa(search)) as returnImgApiNasa;

    let links = ret?.data.collection.items
      .filter((item) => item.links && item.links.length)
      .map((item) => item.links[0].href);

    setImageLiks(links);

    setVisibleImg(links.slice(visibleImg.length, visibleImg.length + 4));
  };

  const handlerSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    const valueParams = (evt?.target as HTMLInputElement).value;
    setSearch(valueParams);
  };

  const handleLoadMore = () => {
    setVisibleImg(
      visibleImg.concat(
        imageLiks.slice(visibleImg.length, visibleImg.length + 4)
      )
    );
  };

  return (
    <HomeContext.Provider
      value={{ getImageData, handlerSearch, visibleImg, handleLoadMore }}
    >
      {children}
    </HomeContext.Provider>
  );
}
