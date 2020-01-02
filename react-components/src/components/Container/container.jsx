import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 50em;
  margin: 0 auto;
`;

export const Container = React.forwardRef((props, ref) => (
  <StyledContainer ref={ref}>{props.children}</StyledContainer>
));
