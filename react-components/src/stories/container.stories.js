import React from "react";
import { storiesOf } from "@storybook/react";

import { Container } from "../components/Container/container";
import { Row } from "../components/Row/row";
import { Column } from "../components/Column/column";

storiesOf("Container", module).add("with children", () => (
  <Container>
    <Row>
      <Column xs={1} sm={1} md={1} lg={1}>
        first child
      </Column>
      <Column xs={2} sm={2} md={2} lg={2}>
        seccond child
      </Column>
      <Column xs={3} sm={3} md={3} lg={3}>
        Third child
      </Column>
      <Column xs={4} sm={4} md={4} lg={4}>
        Third child
      </Column>
    </Row>
  </Container>
));
