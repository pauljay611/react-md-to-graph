import styld, { css } from "styled-components";

interface WrapperProps {
  isWorkspace?: boolean;
  width?: string;
}

export const Wrapper = styld.div`
${(props: WrapperProps) =>
  css`
    width: ${props.width};
  `};
`;

export const ScalerComponent = styld.div`
    width: 1px;
    heigth: 100%;
`;
