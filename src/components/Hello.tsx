import * as React from "react";
import styld from "styled-components";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Text = styld.p`
  font-size: 2em;
`;

export const Hello = (props: HelloProps) => (
  <h1>
    <Text>1235</Text>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
