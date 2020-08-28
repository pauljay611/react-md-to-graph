import React from "react";
import { IGraphTypes } from '../types'
import { IEdge, INode } from "react-digraph";

export const GraphConfig = {
  NodeTypes: {
    empty: {
      // required to show empty nodes
      typeText: "None",
      shapeId: "#empty", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="empty" key="0" >
          <circle cx="50" cy="50" r="45" > </circle>
        </symbol>
      ),
    },
    custom: {
      // required to show empty nodes
      typeText: "Custom",
      shapeId: "#custom", // relates to the type property of a node
      shape: (
        <symbol
          viewBox="0 0 100 100"
          id="custom"
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
      ),
    },
  },
  NodeSubtypes: {} as IGraphTypes,
  EdgeTypes: {
    emptyEdge: {
      // required to show empty edges
      shapeId: "#emptyEdge",
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0" >
          <circle cx="25" cy="25" r="8" fill="currentColor" >
            {" "}
          </circle>
        </symbol>
      ),
    },
  },
};

export const nodes: INode[] = [
  {
    id: "root",
    title: "root",
    type: "empty",
  },
  {
    id: "46ba1c55-635c-4bbb-b69b-b060e0e3ace0",
    title: "1-歡慶開幕/s1",
    type: "empty",
  },
  {
    id: "b7436a56-5d96-4574-a74e-67196668a39a",
    title: "1-歡慶開幕/s2",
    type: "empty",
  },
  {
    id: "73cbe584-4cb9-42f9-8dd1-c384eb443d0d",
    title: "1-歡慶開幕/s3",
    type: "empty",
  },
  {
    id: "6db39735-989e-4cd7-a4cf-d226999e839d",
    title: "2-強強聯手/s4",
    type: "empty",
  },
  {
    id: "b9606097-a65a-4db7-8d96-84d516100949",
    title: "2-強強聯手/s5-A",
    type: "empty",
  },
  {
    id: "ebc0b1be-e37f-4280-85c2-4c6778f981b5",
    title: "3-momo嘉年華/禮物榜",
    type: "empty",
  },
  {
    id: "e0562c36-984f-4653-8b6e-cf35d25e207d",
    title: "4-17media之夜特別活動/round1-A購物巨星",
    type: "empty",
  },
  {
    id: "d8fbae12-fdbd-4699-ad61-93c760915eb3",
    title: "4-17media之夜特別活動/round2-A購物巨星",
    type: "empty",
  },
  {
    id: "1daf6082-53d6-451f-9dd9-2604e35b3d55",
    title: "總榜/宴會出席榜-all",
    type: "empty",
  },
  {
    id: "6cb61795-8632-4819-8d4b-55d59fc2f002",
    title: "總榜/主播區總榜-B購物達人",
    type: "empty",
  },
  {
    id: "7efed75a-11c0-4e07-855d-d93d82768f15",
    title: "總榜/主播區總榜-A購物巨星",
    type: "empty",
  },
  {
    id: "9943cc3e-c160-42a1-84e4-1f609de1ead7",
    title: "總榜/主播區總榜-C購物高手",
    type: "empty",
  },
  {
    id: "b3f03ee6-ca65-4771-8ca3-77f1b492530c",
    title: "總榜/粉絲出席榜",
    type: "empty",
  },
  {
    id: "cea21c6e-df1c-4378-9578-8ad597b9bbaa",
    title: "總榜/粉絲總榜",
    type: "empty",
  },
  {
    id: "166b035f-3c45-4b64-b7a0-82b65ac7f088",
    title: "200whiteList",
    type: "empty",
  },
  {
    id: "705604f9-9265-46fd-a82f-6c210183da42",
    title: "2-強強聯手/s5-B",
    type: "empty",
  },
  {
    id: "3422092a-7054-4b80-a9fa-f604e1c5244a",
    title: "2-強強聯手/s5-C",
    type: "empty",
  },
  {
    id: "fddd341d-e780-4f96-88d4-478c6595d54f",
    title: "總榜/宴會出席榜-200",
    type: "empty",
  },
  {
    id: "b47684f4-a498-4f1f-ba32-2acd08b9829a",
    title: "Agroup",
    type: "empty",
  },
  {
    id: "07b87623-342a-43fc-ba32-e96974670f04",
    title: "Bgroup",
    type: "empty",
  },
  {
    id: "73f58a9e-8c36-4d80-bcdf-cb5b3e0ad4c7",
    title: "Cgroup",
    type: "empty",
  },
  {
    id: "0caea853-7823-4e0a-ac77-90acc11130f9",
    title: "s2Bonus",
    type: "empty",
  },
  {
    id: "2ab3f0a3-5d98-49fe-a47b-5e624e085c7b",
    title: "s5Bonus",
    type: "empty",
  },
  {
    id: "a7c14ef8-2974-4aae-b2a3-9afbc9ad1346",
    title: "r1Bonus",
    type: "empty",
  },
  {
    id: "f956ec65-b19e-441e-af3d-e97151a8cdee",
    title: "r2Bonus",
    type: "empty",
  },
  {
    id: "ef109b22-18ef-4e73-ac07-3e4c45b572f0",
    title: "禮物榜",
    type: "empty",
  },
  {
    id: "7ab8e7b0-d1b2-4a7a-ad18-6bc8e5ef047b",
    title: "4-17media之夜特別活動/round1-B購物達人",
    type: "empty",
  },
  {
    id: "abf4aa98-f7fd-4efa-8e93-a385c6097676",
    title: "4-17media之夜特別活動/round1-C購物高手",
    type: "empty",
  },
  {
    id: "ffc53b33-e157-4f8a-bbe0-797dde301620",
    title: "4-17media之夜特別活動/round2-B購物達人",
    type: "empty",
  },
  {
    id: "ab27f8f1-0694-4048-90c7-f73dd4f64faa",
    title: "4-17media之夜特別活動/round2-C購物高手",
    type: "empty",
  },
];

export const edges: IEdge[] = [
  {
    source: "root",
    target: "46ba1c55-635c-4bbb-b69b-b060e0e3ace0",
    type: "emptyEdge",
  },
  {
    source: "root",
    target: "b7436a56-5d96-4574-a74e-67196668a39a",
    type: "emptyEdge",
  },
  {
    source: "root",
    target: "73cbe584-4cb9-42f9-8dd1-c384eb443d0d",
    type: "emptyEdge",
  },
  {
    source: "b7436a56-5d96-4574-a74e-67196668a39a",
    target: "1daf6082-53d6-451f-9dd9-2604e35b3d55",
    type: "emptyEdge",
  },
  {
    source: "b7436a56-5d96-4574-a74e-67196668a39a",
    target: "0caea853-7823-4e0a-ac77-90acc11130f9",
    type: "emptyEdge",
  },
  {
    source: "b9606097-a65a-4db7-8d96-84d516100949",
    target: "7efed75a-11c0-4e07-855d-d93d82768f15",
    type: "emptyEdge",
  },
  {
    source: "b9606097-a65a-4db7-8d96-84d516100949",
    target: "2ab3f0a3-5d98-49fe-a47b-5e624e085c7b",
    type: "emptyEdge",
  },
  {
    source: "ebc0b1be-e37f-4280-85c2-4c6778f981b5",
    target: "ef109b22-18ef-4e73-ac07-3e4c45b572f0",
    type: "emptyEdge",
  },
  {
    source: "e0562c36-984f-4653-8b6e-cf35d25e207d",
    target: "a7c14ef8-2974-4aae-b2a3-9afbc9ad1346",
    type: "emptyEdge",
  },
  {
    source: "e0562c36-984f-4653-8b6e-cf35d25e207d",
    target: "7efed75a-11c0-4e07-855d-d93d82768f15",
    type: "emptyEdge",
  },
  {
    source: "d8fbae12-fdbd-4699-ad61-93c760915eb3",
    target: "f956ec65-b19e-441e-af3d-e97151a8cdee",
    type: "emptyEdge",
  },
  {
    source: "d8fbae12-fdbd-4699-ad61-93c760915eb3",
    target: "7efed75a-11c0-4e07-855d-d93d82768f15",
    type: "emptyEdge",
  },
  {
    source: "1daf6082-53d6-451f-9dd9-2604e35b3d55",
    target: "fddd341d-e780-4f96-88d4-478c6595d54f",
    type: "emptyEdge",
  },
  {
    source: "1daf6082-53d6-451f-9dd9-2604e35b3d55",
    target: "166b035f-3c45-4b64-b7a0-82b65ac7f088",
    type: "emptyEdge",
  },
  {
    source: "166b035f-3c45-4b64-b7a0-82b65ac7f088",
    target: "6db39735-989e-4cd7-a4cf-d226999e839d",
    type: "emptyEdge",
  },
  {
    source: "166b035f-3c45-4b64-b7a0-82b65ac7f088",
    target: "fddd341d-e780-4f96-88d4-478c6595d54f",
    type: "emptyEdge",
  },
  {
    source: "166b035f-3c45-4b64-b7a0-82b65ac7f088",
    target: "ebc0b1be-e37f-4280-85c2-4c6778f981b5",
    type: "emptyEdge",
  },
  {
    source: "705604f9-9265-46fd-a82f-6c210183da42",
    target: "2ab3f0a3-5d98-49fe-a47b-5e624e085c7b",
    type: "emptyEdge",
  },
  {
    source: "705604f9-9265-46fd-a82f-6c210183da42",
    target: "6cb61795-8632-4819-8d4b-55d59fc2f002",
    type: "emptyEdge",
  },
  {
    source: "3422092a-7054-4b80-a9fa-f604e1c5244a",
    target: "9943cc3e-c160-42a1-84e4-1f609de1ead7",
    type: "emptyEdge",
  },
  {
    source: "3422092a-7054-4b80-a9fa-f604e1c5244a",
    target: "2ab3f0a3-5d98-49fe-a47b-5e624e085c7b",
    type: "emptyEdge",
  },
  {
    source: "fddd341d-e780-4f96-88d4-478c6595d54f",
    target: "9943cc3e-c160-42a1-84e4-1f609de1ead7",
    type: "emptyEdge",
  },
  {
    source: "fddd341d-e780-4f96-88d4-478c6595d54f",
    target: "07b87623-342a-43fc-ba32-e96974670f04",
    type: "emptyEdge",
  },
  {
    source: "fddd341d-e780-4f96-88d4-478c6595d54f",
    target: "b47684f4-a498-4f1f-ba32-2acd08b9829a",
    type: "emptyEdge",
  },
  {
    source: "fddd341d-e780-4f96-88d4-478c6595d54f",
    target: "7efed75a-11c0-4e07-855d-d93d82768f15",
    type: "emptyEdge",
  },
  {
    source: "fddd341d-e780-4f96-88d4-478c6595d54f",
    target: "73f58a9e-8c36-4d80-bcdf-cb5b3e0ad4c7",
    type: "emptyEdge",
  },
  {
    source: "fddd341d-e780-4f96-88d4-478c6595d54f",
    target: "6cb61795-8632-4819-8d4b-55d59fc2f002",
    type: "emptyEdge",
  },
  {
    source: "b47684f4-a498-4f1f-ba32-2acd08b9829a",
    target: "e0562c36-984f-4653-8b6e-cf35d25e207d",
    type: "emptyEdge",
  },
  {
    source: "b47684f4-a498-4f1f-ba32-2acd08b9829a",
    target: "d8fbae12-fdbd-4699-ad61-93c760915eb3",
    type: "emptyEdge",
  },
  {
    source: "b47684f4-a498-4f1f-ba32-2acd08b9829a",
    target: "b9606097-a65a-4db7-8d96-84d516100949",
    type: "emptyEdge",
  },
  {
    source: "b47684f4-a498-4f1f-ba32-2acd08b9829a",
    target: "7efed75a-11c0-4e07-855d-d93d82768f15",
    type: "emptyEdge",
  },
  {
    source: "07b87623-342a-43fc-ba32-e96974670f04",
    target: "6cb61795-8632-4819-8d4b-55d59fc2f002",
    type: "emptyEdge",
  },
  {
    source: "07b87623-342a-43fc-ba32-e96974670f04",
    target: "7ab8e7b0-d1b2-4a7a-ad18-6bc8e5ef047b",
    type: "emptyEdge",
  },
  {
    source: "07b87623-342a-43fc-ba32-e96974670f04",
    target: "705604f9-9265-46fd-a82f-6c210183da42",
    type: "emptyEdge",
  },
  {
    source: "07b87623-342a-43fc-ba32-e96974670f04",
    target: "ffc53b33-e157-4f8a-bbe0-797dde301620",
    type: "emptyEdge",
  },
  {
    source: "73f58a9e-8c36-4d80-bcdf-cb5b3e0ad4c7",
    target: "ab27f8f1-0694-4048-90c7-f73dd4f64faa",
    type: "emptyEdge",
  },
  {
    source: "73f58a9e-8c36-4d80-bcdf-cb5b3e0ad4c7",
    target: "abf4aa98-f7fd-4efa-8e93-a385c6097676",
    type: "emptyEdge",
  },
  {
    source: "73f58a9e-8c36-4d80-bcdf-cb5b3e0ad4c7",
    target: "3422092a-7054-4b80-a9fa-f604e1c5244a",
    type: "emptyEdge",
  },
  {
    source: "73f58a9e-8c36-4d80-bcdf-cb5b3e0ad4c7",
    target: "9943cc3e-c160-42a1-84e4-1f609de1ead7",
    type: "emptyEdge",
  },
  {
    source: "7ab8e7b0-d1b2-4a7a-ad18-6bc8e5ef047b",
    target: "6cb61795-8632-4819-8d4b-55d59fc2f002",
    type: "emptyEdge",
  },
  {
    source: "7ab8e7b0-d1b2-4a7a-ad18-6bc8e5ef047b",
    target: "a7c14ef8-2974-4aae-b2a3-9afbc9ad1346",
    type: "emptyEdge",
  },
  {
    source: "abf4aa98-f7fd-4efa-8e93-a385c6097676",
    target: "9943cc3e-c160-42a1-84e4-1f609de1ead7",
    type: "emptyEdge",
  },
  {
    source: "abf4aa98-f7fd-4efa-8e93-a385c6097676",
    target: "a7c14ef8-2974-4aae-b2a3-9afbc9ad1346",
    type: "emptyEdge",
  },
  {
    source: "ffc53b33-e157-4f8a-bbe0-797dde301620",
    target: "6cb61795-8632-4819-8d4b-55d59fc2f002",
    type: "emptyEdge",
  },
  {
    source: "ffc53b33-e157-4f8a-bbe0-797dde301620",
    target: "f956ec65-b19e-441e-af3d-e97151a8cdee",
    type: "emptyEdge",
  },
  {
    source: "ab27f8f1-0694-4048-90c7-f73dd4f64faa",
    target: "9943cc3e-c160-42a1-84e4-1f609de1ead7",
    type: "emptyEdge",
  },
  {
    source: "ab27f8f1-0694-4048-90c7-f73dd4f64faa",
    target: "f956ec65-b19e-441e-af3d-e97151a8cdee",
    type: "emptyEdge",
  },
];
