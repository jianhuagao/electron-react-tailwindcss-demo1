import { Popover as UiPopover, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { ReactComponent as SettingSvg } from '../../../../../assets/ui/setting-solid.svg';
import { ReactComponent as DownSvg } from '../../../../../assets/ui/chevron-down.svg';

interface PopoverProps {
  trigger: ReactNode;
}

export default function Popover({ trigger }: PopoverProps) {
  return (
    <UiPopover className="relative">
      {() => (
        <>
          <UiPopover.Button>{trigger}</UiPopover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="translate-y-1"
          >
            <UiPopover.Panel className="absolute left-1/2 z-10 mt-3 min-w-[200px] max-w-sm -translate-x-3/4 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-xl bg-white/80 dark:bg-white/20 backdrop-blur-xl">
                <div className="flex flex-col divide-y text-sm divide-white/10 w-[260px]">
                  <div className="flex items-center p-5">
                    <img
                      src="https://picsum.photos/200"
                      alt="avatar"
                      className="rounded-lg"
                      width={60}
                    />
                    <div className="ml-2">
                      <div className="flex items-center">
                        xxxxx <DownSvg className="w-5 cursor-pointer ml-1" />
                      </div>
                      <p>在线</p>
                    </div>
                    <div className="ml-auto">
                      <SettingSvg className="size-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="p-2">
                    <ul>
                      {['退出登录', '在线好友'].map((item) => (
                        <li
                          key={item}
                          className="rounded hover:bg-white/50 dark:hover:bg-white/20 p-2 cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </UiPopover.Panel>
          </Transition>
        </>
      )}
    </UiPopover>
  );
}
