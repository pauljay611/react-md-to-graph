import React from "react";
import { IGraphTypes } from '../types'

export const GraphConfig = {
  NodeTypes: {
    H1: {
      // required to show empty nodes
      typeText: "Phase",
      shapeId: "#H1", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="H1" key="0" >
          <circle cx="50" cy="50" r="45" > </circle>
        </symbol>
      ),
    },
    H2: {
      // required to show empty nodes
      typeText: "Stage",
      shapeId: "#H2", // relates to the type property of a node
      shape: (
        <symbol
          viewBox="0 0 100 100"
          id="H2"
          key="0"
          width="100"
          height="100"
        >
          <rect
            transform="translate(50, 5) rotate(45)"
            width="65"
            height="65"
          />
        </symbol>
      )
    },
  },
  NodeSubtypes: {} as IGraphTypes,
  EdgeTypes: {
    LI: {
      // required to show empty edges
      shapeId: "#LI",
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0" >
          <circle cx="25" cy="25" r="8" fill="currentColor" >
            {"asdsad "}
          </circle>
        </symbol>
      ),
    },
  },
};
