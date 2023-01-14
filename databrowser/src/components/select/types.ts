export enum SelectSize {
  sm = 'sm',
  md = 'md',
}

export interface SelectOption {
  label: string;
  value: string | undefined;
  disabled?: boolean;
  selected?: boolean;
}

export type SelectOptionsPlacement = 'bottom' | 'top';
