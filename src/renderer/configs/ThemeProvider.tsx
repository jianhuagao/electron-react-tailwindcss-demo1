import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type ThemeType = 'dark' | 'light' | 'system' | 'systemDark' | 'systemLight';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeType;
  storageKey?: string;
}

type ThemeProviderState = {
  theme: ThemeType;
  isDark: boolean;
  setTheme: (theme: ThemeType) => void;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  isDark: false,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(
    () => (localStorage.getItem(storageKey) as ThemeType) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme.includes('system')) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme.includes('dark') || theme.includes('Dark'),
      setTheme: (tm: ThemeType) => {
        localStorage.setItem(storageKey, tm);
        setTheme(tm);
      },
    }),
    [theme, storageKey],
  );

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme必须在ThemeProvider中使用');

  return context;
};
