export type WindowId = 
  | 'profile' 
  | 'perf' 
  | 'cases' 
  | 'cmd' 
  | 'ie' 
  | 'recycle'
  | 'about';

export interface WindowState {
  id: WindowId;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
}

export interface DesktopIconItem {
  id: WindowId | 'modern' | 'shutdown' | 'steamy' | string;
  title: string;
  icon: string;
  badge?: string;
  action?: () => void;
}
