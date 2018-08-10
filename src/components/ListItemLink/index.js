import classNames from 'classnames';
import injectSheet from 'react-jss';
import Label from '../Label';
import ListItem from '../ListItem';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Link } from 'thenativeweb-ux';

const styles = theme => ({
  ListItemLink: {
    '& $Link': {
      'flex-grow': 1,
      display: 'flex',
      'align-items': 'center',
      'text-decoration': 'none',
      padding: [ theme.grid.stepSize, theme.grid.stepSize * 2 ],
      'font-size': theme.font.size.medium,
      color: theme.color.brand.dark,
      transition: 'background-color 100ms',
      'will-change': 'background-color'
    }
  },

  IsActive: {
    '& $Link': {
      color: theme.color.brand.highlight
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

        <Label className={ classes.Label }>{ label }</Label>

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
