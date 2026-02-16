# Implementation Plan - Foundational Advisory Service

Adding a new foundational service "pill" to the data.build service offerings, focusing on pre-project discovery, requirements engineering, and strategic alignment.

## 1. Objectives

- Add a new `Service` object to the beginning of the `SERVICES` array in `constants.ts`.
- Ensure the language and tone match the existing high-end, premium "Nano Banana" aesthetic.
- Cover requirements engineering, customer pain discovery, platform motivation ("WHY"), hiring support, and formal concepts (Lastenheft/Pflichtenheft).

## 2. Proposed Content

- **Title**: `Strategic Discovery & Advisory`
- **Description**: `We define the "Why". Before a single line of code is written, we bridge the gap between business pain and technical solution through deep-dive discovery and rigorous requirements engineering.`
- **Details**:
  - `Requirements Engineering`
  - `Business Case & ROI Discovery`
  - `Hiring & Team Advisory`
  - `Technical Specifications (Lastenheft/Pflichtenheft)`

## 3. Implementation Steps

1. Create a new git branch `feature/foundational-service`.
2. Update `constants.ts` to insert the new service as the first element in the `SERVICES` array.
3. Verify the layout in the UI to ensure 4 services (pillows) render correctly.

## 4. Verification

- Run `npm run dev` and check the Services section (or where @[constants.ts] `SERVICES` are used).
- Ensure the order is correct.
