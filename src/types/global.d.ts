interface Window {
  dataLayer: any[];
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
  export const Reorder: any;
  
  export interface PanInfo {
    point: {
      x: number;
      y: number;
    };
    offset: {
      x: number;
      y: number;
    };
    velocity: {
      x: number;
      y: number;
    };
  }

  export interface ReorderGroupProps {
    values: any[];
    onReorder: (newOrder: any[]) => void;
    [key: string]: any;
  }
} 