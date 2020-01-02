import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getClassNames } from "../../utils/getClassNames";
import { SCREEN_SIZE, MEDIA } from "../../constants";
import classNames from "classnames";
import PropTypes from 'prop-types';

const ARRAY_OF_NUMBERS = [1,2, 3, 4];
export const StyledColumn = styled.div`
  &.xs-Grid--full {
    flex: 0 0 100%;
  }

  &.xs-Grid--1of2 {
    flex: 0 0 50%;
  }

  &.xs-Grid--1of3 {
    flex: 0 0 33.3333%;
  }

  &.xs-Grid--1of4 {
    flex: 0 0 25%;
  }
  @media only screen and (min-width: ${MEDIA.small}px) {
    &.sm-Grid--full {
      flex: 0 0 100%;
    }
    &.sm-Grid--1of2 {
      flex: 0 0 50%;
    }
    &.sm-Grid--1of3 {
      flex: 0 0 33.3333%;
    }
    &.sm-Grid--1of4 {
      flex: 0 0 25%;
    }
  }

  @media only screen and (min-width: ${MEDIA.medium}px) {
    &.med-Grid--full {
      flex: 0 0 100%;
    }
    &.med-Grid--1of2 {
      flex: 0 0 50%;
    }
    &.med-Grid--1of3 {
      flex: 0 0 33.3333%;
    }
    &.med-Grid--1of4 {
      flex: 0 0 25%;
    }
  }

  @media only screen and (min-width: ${MEDIA.large}px) {
    &.lg-Grid--full {
      flex: 0 0 100%;
    }
    &.lg-Grid--1of2 {
      flex: 0 0 50%;
    }
    &.lg-Grid--1of3 {
      flex: 0 0 33.3333%;
    }
    &.lg-Grid--1of4 {
      flex: 0 0 25%;
    }
  }
`;
export const Column = React.forwardRef((props, ref) => {
  const [browserScreenSize, setBrowserScreenSize] = useState(SCREEN_SIZE.small);
  useEffect(() => {
    function onBrowserScreenChange() {
      const getScreensize = window.innerWidth;
      setBrowserScreenSize(getScreensize);
    }

    window.addEventListener("resize", () => onBrowserScreenChange());
    return window.removeEventListener("resize", () => onBrowserScreenChange());
  }, [browserScreenSize]);

  const classes = getClassNames({ props, browserScreenSize });
  const columnClass = classNames(classes);
  return (
    <StyledColumn {...props} className={columnClass} ref={ref}>
      {props.children}
    </StyledColumn>
  );
});

Column.propTypes = {
  xs: PropTypes.oneOf(ARRAY_OF_NUMBERS),
  sm: PropTypes.oneOf(ARRAY_OF_NUMBERS),
  md: PropTypes.oneOf(ARRAY_OF_NUMBERS),
  lg: PropTypes.oneOf(ARRAY_OF_NUMBERS),
}