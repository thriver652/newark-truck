import {
  Adapter,
  Coupler,
  Fittings,
  Hoses,
  Pump,
  Rto,
  Seals,
  LeftIcon,
  RightIcon,
} from "../images";

export const partImages = [
  {
    src: Adapter,
    alt: "Adapter",
    name: "Adapter",
    subParts: [
      {
        id: 1,
        name: "Adapter Type A",
        subSubParts: [
          { id: 1, name: "Adapter Type A - Size 1" },
          { id: 2, name: "Adapter Type A - Size 2" },
        ],
      },
      {
        id: 2,
        name: "Adapter Type B",
        subSubParts: [
          { id: 1, name: "Adapter Type B - Size 1" },
          { id: 2, name: "Adapter Type B - Size 2" },
        ],
      },
      {
        id: 3,
        name: "Adapter Type C",
        subSubParts: [
          { id: 1, name: "Adapter Type C - Size 1" },
          { id: 2, name: "Adapter Type C - Size 2" },
        ],
      },
    ],
  },
  {
    src: Coupler,
    alt: "Coupler",
    name: "Coupler",
    subParts: [
      {
        id: 1,
        name: "Quick-Release Coupler",
        subSubParts: [
          { id: 1, name: "Small Quick-Release" },
          { id: 2, name: "Large Quick-Release" },
        ],
      },
      {
        id: 2,
        name: "Threaded Coupler",
        subSubParts: [
          { id: 1, name: "Threaded Coupler - Type 1" },
          { id: 2, name: "Threaded Coupler - Type 2" },
        ],
      },
    ],
  },
  {
    src: Fittings,
    alt: "Fittings",
    name: "Fittings",
    subParts: [
      {
        id: 1,
        name: "Elbow Fitting",
        subSubParts: [
          { id: 1, name: "90 Degree Elbow" },
          { id: 2, name: "45 Degree Elbow" },
        ],
      },
      {
        id: 2,
        name: "Tee Fitting",
        subSubParts: [
          { id: 1, name: "Standard Tee" },
          { id: 2, name: "Reducing Tee" },
        ],
      },
    ],
  },
  {
    src: Hoses,
    alt: "Hoses",
    name: "Hoses",
    subParts: [
      {
        id: 1,
        name: "Hydraulic Hose",
        subSubParts: [
          { id: 1, name: "High-Pressure Hydraulic Hose" },
          { id: 2, name: "Low-Pressure Hydraulic Hose" },
        ],
      },
    ],
  },
  {
    src: Pump,
    alt: "Pump",
    name: "Pump",
    subParts: [
      {
        id: 1,
        name: "Submersible Pump",
        subSubParts: [
          { id: 1, name: "Mini Submersible" },
          { id: 2, name: "Industrial Submersible" },
        ],
      },
    ],
  },
  {
    src: Rto,
    alt: "RTO",
    name: "RTO",
    subParts: [
      {
        id: 1,
        name: "RTO Unit A",
        subSubParts: [
          { id: 1, name: "Standard RTO A" },
          { id: 2, name: "Advanced RTO A" },
        ],
      },
    ],
  },
  {
    src: Seals,
    alt: "Seals",
    name: "Seals",
    subParts: [
      {
        id: 1,
        name: "O-Ring Seal",
        subSubParts: [
          { id: 1, name: "Small O-Ring" },
          { id: 2, name: "Large O-Ring" },
        ],
      },
    ],
  },
];

// Export icons if needed
export { LeftIcon, RightIcon };
