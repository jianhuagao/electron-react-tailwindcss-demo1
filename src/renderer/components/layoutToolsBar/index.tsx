import clsx from 'clsx';
import { memo, useState } from 'react';
import Drawer from '../headlessComponents/drawer';
import Popover from '../headlessComponents/popover';
import { useTheme } from '../../configs/ThemeProvider';

import { ReactComponent as SunIcon } from '../../../../assets/ui/sun.svg';
import { ReactComponent as DarkIcon } from '../../../../assets/ui/moon.svg';
import { ReactComponent as InboxIcon } from '../../../../assets/ui/inbox.svg';
import { ReactComponent as DivideIcon } from '../../../../assets/ui/divide.svg';
import { ReactComponent as MinIcon } from '../../../../assets/ui/winMinLine.svg';
import { ReactComponent as MaxIcon } from '../../../../assets/ui/winMaxLine.svg';
import { ReactComponent as SettingIcon } from '../../../../assets/ui/setting.svg';
import { ReactComponent as DownIcon } from '../../../../assets/ui/chevron-down.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/ui/winCloseLine.svg';
import { ReactComponent as RestoreIcon } from '../../../../assets/ui/winRestoreLine.svg';
import { ReactComponent as ComputerIcon } from '../../../../assets/ui/computer-desktop.svg';

const darkIconClassName =
  'cursor-pointer group-hover:mx-1 transition-all opacity-0 group-hover:opacity-100 duration-300 w-0 group-hover:w-[18px]';

export default memo(function LayoutToolsBar() {
  const { theme, setTheme } = useTheme();
  const [isMax, setIsMax] = useState(false);

  // 非mac系统
  const isNotMacOs = window.osVersion !== 'darwin';

  const handleMinimize = () => {
    window.api.minimizeWindow();
  };
  const handleMaximize = () => {
    window.api.maximizeWindow();
  };
  const handleClose = () => {
    window.api.closeWindow();
  };

  window.api.maximize((value) => {
    setIsMax(value);
  });

  return (
    <div
      className={clsx(
        isNotMacOs && 'p-5 pb-0 region-drag',
        'flex items-center gap-5',
      )}
    >
      <div className="ml-auto">
        <Popover
          trigger={
            <div className="group transition-all flex rounded-full cursor-pointer bg-gray-300/20 dark:bg-white/20 dark:hover:bg-white/10 gap-2 pl-[4px] pr-[10px] py-[4px] text-xs items-center">
              <img
                src="https://picsum.photos/200"
                alt="avatar"
                className="rounded-full"
                width={24}
              />
              xxxx
              <DownIcon className="w-0 group-hover:w-3 transition-all duration-300" />
            </div>
          }
        />
      </div>
      <div className="group transition-all flex rounded-full hover:bg-gray-300/20 dark:hover:bg-white/10 px-[6px] py-[4px] text-xs items-center">
        <DarkIcon
          onClick={() => {
            setTheme('dark');
          }}
          className={clsx(
            darkIconClassName,
            theme === 'dark' && 'w-[22px] opacity-100',
          )}
        />
        <SunIcon
          onClick={() => {
            setTheme('light');
          }}
          className={clsx(
            darkIconClassName,
            theme === 'light' && 'w-[22px] opacity-100',
          )}
        />
        <ComputerIcon
          onClick={() => {
            setTheme('system');
          }}
          className={clsx(
            darkIconClassName,
            theme.includes('system') && 'w-[22px] opacity-100',
          )}
        />
      </div>
      <Drawer
        trigger={<InboxIcon className="w-[22px] cursor-pointer" />}
        title="Inbox"
        icon={<InboxIcon className="w-[22px]" />}
      />
      <Drawer
        trigger={
          <SettingIcon className="w-[22px] cursor-pointer mr-2 hover:animate-wiggle" />
        }
        title="Setting"
        icon={<SettingIcon className="w-[22px]" />}
      />
      {/* windows 下需要显示最大化最小化关闭按钮 */}
      {isNotMacOs && (
        <>
          <DivideIcon className="w-[20px] opacity-15" />
          <div className="flex items-center gap-3">
            <MinIcon
              className="w-[22px] cursor-pointer"
              onClick={handleMinimize}
            />
            {isMax ? (
              <RestoreIcon
                className="w-[22px] cursor-pointer"
                onClick={handleMaximize}
              />
            ) : (
              <MaxIcon
                className="w-[22px] cursor-pointer"
                onClick={handleMaximize}
              />
            )}

            {/* <RestoreIcon className="w-[22px] cursor-pointer" /> */}
            <CloseIcon
              className="w-[22px] cursor-pointer"
              onClick={handleClose}
            />
          </div>
        </>
      )}
    </div>
  );
});
