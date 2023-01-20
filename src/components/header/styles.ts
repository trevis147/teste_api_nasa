import { lighten } from "polished";
import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 60px;
  background: ${(props) => lighten(0.1, props.theme.colors.primary)};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 10px;
  flex-direction: row-reverse;
`;

export const HeaderLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
