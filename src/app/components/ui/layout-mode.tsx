import * as React from 'react';
import { useIsMobile } from './use-mobile';

export type LayoutMode = 'auto' | 'mobile' | 'desktop';
type ResolvedLayoutMode = 'mobile' | 'desktop';

interface LayoutModeContextValue {
  layoutMode: LayoutMode;
  resolvedLayoutMode: ResolvedLayoutMode;
  detectedMobile: boolean;
  isMobileLayout: boolean;
  isDesktopLayout: boolean;
  setLayoutMode: (nextMode: LayoutMode) => void;
}

const STORAGE_KEY = 'portfolio-layout-mode';

const LayoutModeContext = React.createContext<LayoutModeContextValue | null>(null);

function isLayoutMode(value: string | null): value is LayoutMode {
  return value === 'auto' || value === 'mobile' || value === 'desktop';
}

export function LayoutModeProvider({ children }: { children: React.ReactNode }) {
  const detectedMobile = useIsMobile();
  const [layoutMode, setLayoutModeState] = React.useState<LayoutMode>('auto');

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedMode = window.localStorage.getItem(STORAGE_KEY);
    if (isLayoutMode(storedMode)) {
      setLayoutModeState(storedMode);
    }
  }, []);

  const resolvedLayoutMode: ResolvedLayoutMode =
    layoutMode === 'auto' ? (detectedMobile ? 'mobile' : 'desktop') : layoutMode;

  React.useEffect(() => {
    document.documentElement.dataset.layoutModePreference = layoutMode;
    document.documentElement.dataset.layoutMode = resolvedLayoutMode;
  }, [layoutMode, resolvedLayoutMode]);

  const setLayoutMode = (nextMode: LayoutMode) => {
    setLayoutModeState(nextMode);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextMode);
    }
  };

  return (
    <LayoutModeContext.Provider
      value={{
        layoutMode,
        resolvedLayoutMode,
        detectedMobile,
        isMobileLayout: resolvedLayoutMode === 'mobile',
        isDesktopLayout: resolvedLayoutMode === 'desktop',
        setLayoutMode,
      }}
    >
      {children}
    </LayoutModeContext.Provider>
  );
}

export function useLayoutMode() {
  const context = React.useContext(LayoutModeContext);

  if (!context) {
    throw new Error('useLayoutMode must be used within a LayoutModeProvider.');
  }

  return context;
}
