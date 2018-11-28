import injectSheet from 'react-jss';
import React from 'react';
import { Brand, Link, Product, View } from 'thenativeweb-ux';

const styles = theme => ({
  '@keyframes AnimateLogo': {
    '0%': { transform: 'scale(0.6)', opacity: 0 },
    '10%': { opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 }
  },
  '@keyframes AnimateTypo': {
    '0%': { transform: 'scale(0.7)', opacity: 0 },
    '40%': { opacity: 0 },
    '100%': { transform: 'translate3d(0, 0, 0px)', opacity: 1 }
  },
  '@keyframes AnimateMadeBy': {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '50%': { opacity: 0 },
    '100%': { transform: 'translate3d(0, 0, 0px)', opacity: 1 }
  },
  StoreFront: {
    background: theme.color.brand.darkGrey,
    perspective: '1000px'
  },
  Logo: {
    'transform-style': 'preserve-3d',
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
    'transform-origin': '50% -200%',
    'transform-style': 'preserve-3d',
    'animation-name': 'AnimateTypo',
    'animation-duration': '2500ms',
    'animation-timing-function': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    'will-change': 'transform'
  },
  MadeBy: {
    'transform-origin': '50% -400%',
    'animation-name': 'AnimateMadeBy',
    'animation-delay': '500ms',
    'animation-duration': '1900ms',
    'animation-timing-function': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    'animation-fill-mode': 'both',
    'will-change': 'transform',
    'margin-top': theme.grid.stepSize * 1.5
  }
});

const StoreFront = ({ classes }) => (
  <View className={ classes.StoreFront } orientation='vertical' alignItems='center' justifyContent='center'>
    <View orientation='vertical' alignItems='center' justifyContent='center'>
      <div id='wolkenkit-brand-logo' className={ classes.Logo }><Product name='wolkenkit' size='xl' isAnimated={ true } type='logo-only' /></div>
      <div id='wolkenkit-brand-typo' className={ classes.Typo }>
        <Link href='http://www.wolkenkit.io' isExternal={ true }>
          <Product name='wolkenkit' size='xl' isAnimated={ true } type='typo-only' />
        </Link>
      </div>

      <div className={ classes.MadeBy }><Brand.MadeBy /></div>
    </View>
  </View>
);

export default injectSheet(styles)(StoreFront);
