import React from 'react';
import classnames from 'classnames';
import { Nav } from '@components';
import { LayoutProps } from './types';
import { useStyles } from './styles';

const Layout = (props:LayoutProps) => {
  const classes = useStyles();

  const {
    children,
    navTitle,
    className,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classnames(classes.contentWrapper)}>
        <Nav title={navTitle} />
        <div className={classes.children}>
          <div className={classes.appBarPlaceholder} />
          <div className={classnames(className, 'main-content')}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
