import { lighten } from "polished";
import styled from "styled-components";

const rad = "0.7rem";
const dur = "0.3s";
const colorDark = "#2f2f2f";
const colorLight = "#fff";
const fontFam = "Lato, sans-serif";
const height = "3rem";
const btnWidth = "6rem";
const bez = "cubic-bezier(0, 0, 0.43, 1.49)";

export const Container = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

export const Form = styled.form`
  position: relative;
  width: 30rem;
  background: ${(props) => props.theme.colors.primary};
  border-radius: ${rad};
`;

export const Input = styled.input`
  height: ${height};
  font-family: ${fontFam};
  border: 0;
  color: ${colorDark};
  font-size: 1.8rem;
`;

export const SearchInput = styled(Input)`
  outline: 0;
  border: solid 1px;
  width: 100%;
  background: ${colorLight};
  padding: 0 1.6rem;
  border-radius: ${rad};
  appearance: none;
  transition: all ${dur} ${bez};
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;

  &:not(:placeholder-shown) {
    border-radius: ${rad} 0 0 ${rad};
    width: calc(100% - ${btnWidth});
    + button {
      display: block;
    }
  }
`;

export const SearchButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: ${btnWidth};
  font-weight: bold;
  background: ${(props) => lighten(0.1, props.theme.colors.button.primary)};
  border-radius: 0 ${rad} ${rad} 0;
  height: 100%;
  border: 0;
  cursor: pointer;
  ${SearchInput}:not(:placeholder-shown) & {
    display: block;
  }
`;

export const SearchLabel = styled.label`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;
