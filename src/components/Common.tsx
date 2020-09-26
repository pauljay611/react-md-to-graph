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
