import type React from 'react';
import type { CardProps as PRCardProps } from 'primereact/card';

export interface CardProps
  extends Omit<PRCardProps, 'title' | 'subTitle' | 'header' | 'footer' | 'children' | 'className' | 'content'> {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export type { PRCardProps };
