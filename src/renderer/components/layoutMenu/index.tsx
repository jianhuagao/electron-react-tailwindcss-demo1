import { memo } from 'react';
import { Tab } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ReactComponent as StoreIcon } from '../../../../assets/menu/store.svg';
import { ReactComponent as CommunityIcon } from '../../../../assets/menu/community.svg';
import { ReactComponent as ChatIcon } from '../../../../assets/menu/chat.svg';
import { ReactComponent as PoweredIcon } from '../../../../assets/menu/powered.svg';

interface MenuItemProps {
  title: string;
  path: string;
}

const MenuItem = memo(function MenuItem({ title, path }: MenuItemProps) {
  const { pathname } = useLocation();
  const isCheck = pathname.startsWith(path);

  return (
    <Tab
      className={clsx(
        'w-full rounded-lg text-sm font-medium',
        isCheck
          ? 'bg-white dark:bg-white/30 text-blue-700/80 dark:text-blue-300 shadow'
          : 'dark:text-blue-100 text-[#3a4d5c] hover:bg-white/[0.12] dark:hover:text-white',
      )}
    >
      <Link to={path} className="w-full h-full block py-2.5 leading-5">
        {title}
      </Link>
    </Tab>
  );
});

export default memo(function LayoutMenu() {
  const routerArr = [
    {
      path: '/store',
      icon: <StoreIcon className="size-5" />,
      title: 'TAB1',
    },
    {
      path: '/community',
      icon: <CommunityIcon className="size-5" />,
      title: 'TAB2',
    },
    {
      path: '/chat',
      icon: <ChatIcon className="size-5" />,
      title: 'TAB3',
    },
    {
      path: '/powered',
      icon: <PoweredIcon className="size-5" />,
      title: 'TAB4',
    },
  ];

  return (
    <div className="w-full p-3">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#EEEEEE]/60 dark:bg-blue-900/20 p-1">
          {routerArr.map((arr) => (
            <MenuItem key={arr.title} title={arr.title} path={arr.path} />
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
});
