import api from "../../../services/fetch";
import { returnImgApiNasa } from "./interface-props";

export async function searchImageNasa(
  value: string
): Promise<returnImgApiNasa> {
  const ret = (await api.get(
    `https://images-api.nasa.gov/search?q=${value}`
  )) as returnImgApiNasa;

  return ret;
}
