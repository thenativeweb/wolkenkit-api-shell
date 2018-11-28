import classNames from 'classnames';
import injectSheet from 'react-jss';
import ListItem from '../ListItem';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Link, Text } from 'thenativeweb-ux';

const styles = theme => ({
  ListItemLink: {
    '& $Link': {
      'flex-grow': 1,
      display: 'flex',
      'align-items': 'center',
      'text-decoration': 'none',
      padding: [ theme.grid.stepSize * 0.5, theme.grid.stepSize * 2 ],
      'font-size': theme.font.size.medium,
      color: theme.color.brand.dark,
      position: 'relative',

      '&:focus': {
        outline: `0`
      },
      '&:focus::before': {
        content: '""',
        position: 'absolute',
        right: 0,
        left: 0,
        top: -1,
        bottom: -1,
        'border-left': `${theme.color.brand.highlight} 2px solid`
      }
    }
  },

  IsActive: {
    '& $Link': {
      color: theme.color.brand.highlight
    },
    '& $IconRight': {
      fill: theme.color.brand.highlight
    }
  },

  IconLeft: {
    'margin-right': theme.grid.stepSize
  },

  Label: {
    'flex-grow': 1,
    'flex-shrink': 1
  },

  IconRight: {
    'flex-grow': 0,
    'flex-shrink': 0,
    'margin-left': theme.grid.stepSize * 2
  },

  Link: {}
});

const ListItemLink = ({ classes, className, icon, isActive, label, href }) => {
  const itemClassNames = classNames(classes.ListItemLink, {
    [classes.IsActive]: isActive === true
  }, className);

  return (
    <ListItem className={ itemClassNames }>
      <Link className={ classes.Link } href={ href }>
        { icon ? <Icon className={ classes.IconLeft } name={ icon } size='s' /> : null }

        <Text className={ classes.Label }>{ label }</Text>

        <Icon className={ classes.IconRight } name='chevron' size='s' />
      </Link>
    </ListItem>
  );
};

ListItemLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string
};

export default injectSheet(styles)(ListItemLink);
