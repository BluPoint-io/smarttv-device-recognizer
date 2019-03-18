import platforms from './statics/platforms';

class Recognizer {
	static setCurrentDevice() {
		return platforms.find(x => navigator.userAgent.indexOf(x.agentIndex) > -1) || platforms[0];
	}

	static getKeyCodes(brandName) {
		return require(`./keycodes/${brandName}`);
	}
}

export default Recognizer;
