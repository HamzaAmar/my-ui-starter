import type { ReactElement, ReactNode } from 'react';
import type { Color, Corner } from '../../../types/utils';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'solid' | 'dotted' | 'dashed';

export interface TimelineBase {
  corner?: Corner;
  size?: Size;
  variant?: Variant;
}

export interface TimelineProps extends TimelineBase {
  color?: Color;
  children: ReactNode;
}

export interface TimelineItemProps extends TimelineBase {
  children: ReactNode;
  bullet?: ReactElement;
}

export interface ContextProps extends TimelineBase {}

export interface TimelineContextProviderProps extends ContextProps {
  children: ReactNode;
}
