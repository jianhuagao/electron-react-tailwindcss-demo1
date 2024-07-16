import clsx from 'clsx';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutToolsBar from '../layoutToolsBar';
import LayoutMenu from '../layoutMenu';

export default memo(function LayoutContent() {
  // mac系统
  const isMacOs = window.osVersion === 'darwin';

  return (
    <div
      className={clsx(
        isMacOs
          ? 'my-[20px] mr-[18px] rounded-lg p-5'
          : 'blurImg-tr !bg-[length:30%]',
        'flex-grow',
      )}
    >
      <LayoutToolsBar />
      <LayoutMenu />
      <div className={clsx(isMacOs || 'p-5 pt-2')}>
        <Outlet />
      </div>
    </div>
  );
});
