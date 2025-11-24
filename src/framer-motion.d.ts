import 'react';

declare module 'framer-motion' {
  export const AnimatePresence: React.ComponentType<{
    children?: React.ReactNode;
    initial?: boolean;
    mode?: 'sync' | 'wait' | 'popLayout';
    presenceAffectsLayout?: boolean;
  }> & {
    (props: {
      children?: React.ReactNode;
      initial?: boolean;
      mode?: 'sync' | 'wait' | 'popLayout';
      presenceAffectsLayout?: boolean;
    }): React.ReactElement | null;
  };
}

