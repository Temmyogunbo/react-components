import { SCREEN, MEDIA } from '../constants';

export const getClassNames = ({props, browserScreenSize}) => {
  return Object.keys(props).reduce((accum, curr) => {
    switch (true) {
      case SCREEN.small === curr &&
        browserScreenSize >= MEDIA.small &&
        browserScreenSize < MEDIA.medium:
        switch (props[curr]) {
          case 1:
            accum["sm-Grid--full"] = true;
            break;
          case 2:
            accum["sm-Grid--1of2"] = true;
            break;
          case 3:
            console.log("three");
            accum["sm-Grid--1of3"] = true;
            break;

          default:
            accum["sm-Grid--1of4"] = true;
            break;
        }
        break;
      case SCREEN.medium === curr &&
        browserScreenSize >= MEDIA.medium &&
        browserScreenSize < MEDIA.large:
        switch (props[curr]) {
          case 1:
            accum["med-Grid--full"] = true;
            break;
          case 2:
            accum["med-Grid--1of2"] = true;
            break;
          case 3:
            accum["med-Grid--1of3"] = true;
            break;

          default:
            accum["med-Grid--1of4"] = true;
            break;
        }
        break;
      case SCREEN.large === curr && browserScreenSize >= MEDIA.large:
        switch (props[curr]) {
          case 1:
            accum["lg-Grid--full"] = true;
            break;
          case 2:
            accum["lg-Grid--1of2"] = true;
            break;
          case 3:
            accum["lg-Grid--1of3"] = true;
            break;

          default:
            accum["lg-Grid--1of4"] = true;
            break;
        }
        break;

      case SCREEN.extraSmall === curr && browserScreenSize < MEDIA.small:
        switch (props[curr]) {
          case 1:
            accum["xs-Grid--full"] = true;
            break;
          case 2:
            accum["xs-Grid--1of2"] = true;
            break;
          case 3:
            accum["xs-Grid--1of3"] = true;
            break;

          default:
            accum["xs-Grid--1of4"] = true;
            break;
        }
        break;
      default:
        break;
    }
    return accum;
  }, {});
};
