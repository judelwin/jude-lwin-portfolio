import React from 'react';
import { AnimatePresence as FramerAnimatePresence } from 'framer-motion';

interface AnimatePresenceWrapperProps {
  children?: React.ReactNode;
  mode?: 'sync' | 'wait' | 'popLayout';
  initial?: boolean;
  presenceAffectsLayout?: boolean;
}

export const AnimatePresenceWrapper: React.FC<AnimatePresenceWrapperProps> = (props) => {
  return React.createElement(
    FramerAnimatePresence as React.ComponentType<AnimatePresenceWrapperProps>,
    props
  ) as React.ReactElement;
};

