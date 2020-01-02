import React from "react";
import Column from "../Column";
import { create } from "react-test-renderer";

describe("Column", () => {
  it("render child", () => {
    const testRenderer = create(
      <Column xs={1} sm={1} md={1} lg={1}>
        first child
      </Column>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
