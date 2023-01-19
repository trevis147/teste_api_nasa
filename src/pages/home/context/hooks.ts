import { useContext } from "react";
import { HomeContext } from ".";
import { HomeContextProps } from "./interface-props";

export function useHome(): HomeContextProps {
  const context: HomeContextProps = useContext(HomeContext);

  if (!context) throw new Error("useHome must be used within a HomeProvider");
  return context;
}
