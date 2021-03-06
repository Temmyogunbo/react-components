import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledRow = styled.div`
  & > * {
    flex: 1;
  }
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
export const Row = React.forwardRef((props, ref) => (
  <StyledRow className="row" ref={ref} {...props}>
    {props.children}
  </StyledRow>
));

Row.propTypes = {
  children: PropTypes.node
};
