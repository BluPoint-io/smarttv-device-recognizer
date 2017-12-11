import platforms from './statics/platforms';


class Recognizer {
  static setCurrentDevice() {
    const userAgent = navigator.userAgent;
    let currentDevice = {
      agentIndex: 'browserDefault',
      brandName: 'web',
      modelYear: '2017',
      displayName: 'Default Browser'
    };
    for (let platform = 0; platform < platforms.length; platform += 1) {
      if (userAgent.indexOf(platforms[platform].agentIndex) >= 0) {
        currentDevice = platforms[platform];
        break;
      }
    }
    return currentDevice;
  }

  static getKeyCodes(brandName) {
    return require(`./keycodes/${brandName}`);
  }
}

export default Recognizer;
