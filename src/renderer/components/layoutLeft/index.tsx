import { memo } from 'react';
import clsx from 'clsx';
import LayoutMenu from '../layoutMenu';
// import { ReactComponent as Logo } from '../../../../assets/logo.svg';

export default memo(function LayoutLeft() {
  // 获取操作系统
  const { osVersion } = window;

  return (
    <div
      className={clsx(
        'min-w-[200px] rounded-tr-lg flex flex-col py-5 pl-[18px]',
        osVersion !== 'win32' && 'pt-10',
      )}
    >
      {/* logo部分 */}
      <div className="py-3 flex items-center gap-2 w-[160px] text-black dark:text-white">
        {/* <Logo className="w-[40px]" /> */}
        <p className="text-lg font-semibold">title</p>
      </div>
      {/* 导航部分 */}
      <LayoutMenu />
    </div>
  );
});
