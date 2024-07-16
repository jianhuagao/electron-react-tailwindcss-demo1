import { Api, ElectronHandler, OsVersion } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    osVersion: OsVersion;
    api: Api;
  }
}

export {};
