import { Grid } from "@mui/material";
import Input from "../../../components/input";
import { useHome } from "../context/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import ContainerImg from "../../../components/containerImg";

export function HomePage() {
  const { getImageData, visibleImg, handlerSearch, handleLoadMore } = useHome();

  return (
    <>
      <Input onChange={handlerSearch} onClick={() => getImageData()} />
      <InfiniteScroll
        dataLength={visibleImg?.length ?? 0}
        next={handleLoadMore}
        hasMore={true}
        loader={""}
      >
        <Grid container spacing={3} marginTop={5}>
          {visibleImg &&
            visibleImg.map((item, k) => (
              <Grid item xs={6} key={k}>
                <ContainerImg
                  href={item}
                  width={"100%"}
                  alt={item.split("/")[4] ?? ""}
                />
              </Grid>
            ))}
        </Grid>
      </InfiniteScroll>
    </>
  );
}
