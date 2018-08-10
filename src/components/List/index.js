import classNames from 'classnames';
import injectSheet from 'react-jss';
import React from 'react';

const styles = theme => ({
  List: {
    background: theme.color.panelBackground,
    'line-height': '30px',
    overflow: 'hidden',
    'border-right': `1px solid ${theme.color.brand.lightGrey}`,
    'min-width': 250
  },

  Header: {
    'font-size': theme.font.size.xlarge,
    'align-items': 'center',
    'border-bottom': `1px solid ${theme.color.brand.lightGrey}`,
    'font-weight': 700
  }
});

const Header = function (props) {
  const { className, classes, children } = props;

  return (
    <div className={ classNames(classes.Header, className) }>
      { children }
    </div>
  );
};

const Body = function ({ children }) {
  return (
    children
  );
};

const List = function ({ className, classes, children }) {
  return (
    <div className={ classNames(classes.List, className) }>
      { children }
    </div>
  );
};

List.Header = injectSheet(styles)(Header);
List.Body = Body;

export default injectSheet(styles)(List);
