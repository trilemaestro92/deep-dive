import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';



function FeatureCarousel(props) {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <ItemsCarousel
      numberOfCards={(matches? 4:1)}
      freeScrolling={true}
      showSlither={matches ? false: true}
      slidesToScroll={1}
      firstAndLastGutter={false}
      gutter={20}

      rightChevron={'>'}
      leftChevron={'<'}
      chevronWidth={0}
      outsideChevron={false}

      springConfig={{ "stiffness": 120, "damping": 14 }}

      requestToChangeActive={props.requestToChangeActive}
      activeItemIndex={props.activeItemIndex}
      activePosition={'center'}
      children={props.children}
    />
  );
}

FeatureCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({ withTheme: true })(FeatureCarousel);