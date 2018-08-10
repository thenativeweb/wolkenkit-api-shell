import injectSheet from 'react-jss';
import React from 'react';
import Wolkenkit from 'thenativeweb-ux/dist/components/Brand/Product/logos/Wolkenkit';
import { Brand, Link, View } from 'thenativeweb-ux';

const styles = theme => ({
  '@keyframes AnimateLogo': {
    '0%': { transform: 'translateZ(-400px)', opacity: 0 },
    '10%': { opacity: 0 },
    '100%': { transform: 'translateZ(0px)', opacity: 1 }
  },
  '@keyframes AnimateTypo': {
    '0%': { transform: 'translateZ(-300px)', opacity: 0 },
    '40%': { opacity: 0 },
    '100%': { transform: 'translateZ(0px)', opacity: 1 }
  },
  '@keyframes AnimateMadeBy': {
    '0%': { transform: 'translateZ(-250px)', opacity: 0 },
    '50%': { opacity: 0 },
    '100%': { transform: 'translateZ(0px)', opacity: 1 }
  },
  StoreFront: {
    background: theme.color.brand.darkGrey,
    perspective: '1000px'
  },
  Logo: {
    'animation-name': 'AnimateLogo',
    'animation-duration': '4500ms',
    'animation-timing-function': 'cubic-bezier(0.190, 0.965, 0.165, 1)',
    'will-change': 'transform',
    '& > div': {
      width: 220,
      height: 220
    }
  },
  Typo: {
    'animation-name': 'AnimateTypo',
    'animation-duration': '2500ms',
    'animation-timing-function': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    'will-change': 'transform',
    '& div > div:first-child': {
      display: 'none'
    }
  },
  MadeBy: {
    'animation-name': 'AnimateMadeBy',
    'animation-delay': '500ms',
    'animation-duration': '2000ms',
    'animation-timing-function': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    'animation-fill-mode': 'both',
    'will-change': 'transform',
    'margin-top': theme.grid.stepSize * 1.5
  }
});

const StoreFront = ({ classes }) => (
  <View className={ classes.StoreFront } orientation='vertical' alignItems='center' justifyContent='center'>
    <View orientation='vertical' alignItems='center' justifyContent='center'>
      <div className={ classes.Logo }><Wolkenkit size='l' isAnimated={ true } /></div>
      <div className={ classes.Typo }>
        <Link href='http://www.wolkenkit.io' isExternal={ true }>
          <Brand.Product name='wolkenkit' size='l' />
        </Link>
      </div>

      <div className={ classes.MadeBy }><Brand.MadeBy /></div>
    </View>
  </View>
);

export default injectSheet(styles)(StoreFront);
