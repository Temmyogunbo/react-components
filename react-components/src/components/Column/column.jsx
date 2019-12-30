import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getClassValues } from "../../utils/getClassValues";
import { SCREEN_SIZE, SCREEN, MEDIA } from "../../constants";
import classNames from "classnames";

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

  const classValues = getClassValues({ props, browserScreenSize });
  const columnClass = classNames(classValues);
  return (
    <StyledColumn {...props} className={columnClass} ref={ref}>
      {props.children}
    </StyledColumn>
  );
});
