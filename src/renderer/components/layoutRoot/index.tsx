import { memo } from 'react';
import clsx from 'clsx';
import TitleBar from '../titleBar';
import LayoutContent from '../layoutContent';
import { useTheme } from '../../configs/ThemeProvider';

export default memo(function LayoutRoot() {
  const { isDark } = useTheme();
  // mac系统
  const isMacOs = window.osVersion === 'darwin';
  // blurImg
  return (
    <div
      className={clsx(
        isDark || 'blurImg',
        'h-screen relative from-[#424676] select-none to-[#9276A5] via-[#676896] dark:bg-gradient-to-br',
      )}
    >
      {isMacOs && <TitleBar />}
      <div className="h-full">
        <LayoutContent />
      </div>
    </div>
  );
});
