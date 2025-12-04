import type { IConfig, IWps } from './index.d';

interface WebOfficeSDK {
  config: (conf: IConfig) => IWps;
}

declare const WebOfficeSDK: WebOfficeSDK;
export default WebOfficeSDK;
export type { IWps, IConfig };
