# smarttv-device-recognizer

Are you bored from identicate what's the current device and what is it's capabilities? Are you tired catch up new SmartTV devices? This is a lightweight library to recognize your current device. You can develop other things without thinking device platform

### Installation

smarttv-device-recognizer requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install --save smarttv-device-recognizer
```

### Usage

It's easy to use just write 

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```js
import Recognizer from 'smarttv-device-recognizer';

let currentDevice = Recognizer.setCurrentDevice();

/* current device will be an object like that: 
  {
    agentIndex: 'Tizen 2.4.0',
    brandName: 'tizen',
    modelYear: '2016',
    displayName: 'Samsung SmartTV Tizen | 2016'
  },
 */
```

> Are you looking for complete smarttv development suite? Yes, we are developing a new smarttv-framework for your all core requirements. While we develop it you may give it a try or give us a star?

https://github.com/dogantv/smarttv

> ##### You can use this product easily with zero configuration within our smarttv-framework (documents will be ready soon!)
