import platforms from './statics/platforms';


class CurrentDevice {
  constructor() {
    this.userAgent = navigator.userAgent;
    this.currentDevice = {
      agentIndex: 'browserDefault',
      brandName: 'web',
      modelYear: '2017',
      displayName: 'Default Browser'
    };
    this.setCurrentDevice(platforms);
  }

  setCurrentDevice(platforms) {
    for (let platform = 0; platform < platforms.length; platform += 1) {
      if (this.userAgent.indexOf(platforms[platform].agentIndex) >= 0) {
        this.currentDevice = platforms[platform];
        break;
      }
    }
    return this.currentDevice;
  }
}

const device = new CurrentDevice();
const currentDevice = device.currentDevice;

export {currentDevice};
