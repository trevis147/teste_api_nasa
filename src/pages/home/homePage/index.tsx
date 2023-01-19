import Input from "../../../components/input";
import { useHome } from "../context/hooks";

export function HomePage() {
  const { getImageData, search, handlerSearch } = useHome();

  return (
    <>
      <Input onChange={handlerSearch} onClick={() => getImageData} />
    </>
  );
}
