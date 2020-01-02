import React from "react";
import Column from "../Column";
import Row from "../Row";
import { create } from "react-test-renderer";

describe("Row", () => {
  it("render child", () => {
    const testRenderer = create(
        <Row>
          <Column xs={1} sm={1} md={1} lg={1}>
            first child
          </Column>
          <Column xs={2} sm={2} md={2} lg={2}>
            seccond child
          </Column>
        </Row>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
