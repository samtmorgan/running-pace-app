declare interface Window {
  sa_event?: (event: string, data?: Record<string, unknown>) => void;
}
