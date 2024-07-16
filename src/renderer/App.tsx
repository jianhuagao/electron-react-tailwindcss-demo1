import './App.css';
import { ReactNode, memo, useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';
import routerConfig from './configs/router';
import { ThemeProvider, useTheme } from './configs/ThemeProvider';

const TriggerTheme = memo(function TriggerTheme({
  children,
}: {
  children: ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!theme.includes('system')) return; // 如果不是系统主题，不需要监听系统黑暗模式变化
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    function handleDarkModeChange(e: any) {
      if (e.matches) {
        setTheme('systemDark');
      } else {
        setTheme('systemLight');
      }
    }

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange); // 监听系统黑暗模式变化
    handleDarkModeChange(darkModeMediaQuery); // 初始化时检查一次系统黑暗模式状态
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange); // 移除监听
    };
  }, [theme, setTheme]);

  return children;
});

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <TriggerTheme>
        <RouterProvider router={routerConfig} />
      </TriggerTheme>
    </ThemeProvider>
  );
}
