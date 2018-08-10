import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  ListItem: {
    display: 'flex',
    transition: 'background-color 100ms',
    'will-change': 'background-color',
    'border-bottom': `1px solid ${theme.color.brand.lightGrey}`,

    '&:last-child': {
      'border-bottom': `none`
    },

    '&:only-child': {
      'border-bottom': `1px solid ${theme.color.brand.lightGrey}`
    },

    '&:hover': {
      background: theme.color.brand.lightGrey
    }
  }
});

const ListItem = ({ classes, className, children }) => {
  const itemClassNames = classNames(classes.ListItem, className);

  return (
    <div className={ itemClassNames }>
      { children }
    </div>
  );
};

ListItem.propTypes = {
  className: PropTypes.string
};

export default injectSheet(styles)(ListItem);
