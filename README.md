# NFC Test

## Description

This project tests whether I can use a device to read/write to NFC chips.

## Badges

![GitHub issues](https://img.shields.io/github/issues/crs1138/nfc-test)
![GitHub](https://img.shields.io/github/license/crs1138/nfc-test)

## Requirements

### Hardware Require
* A Google Chrome 81+ browser on an Android device is required as this Chrome's feature is still very much in experimental stage.
* An NFC chip – standard: NTAG214, NTAG215, NTAG216

_Note: Note: Devices and tags have to be formatted and recorded specifically to support NDEF record format to be used with Web NFC. Low-level operations are currently not supported by the API, however there is a public discussion about API that would add such functuionality._

### Software Requirements
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) or [Npm](https://www.npmjs.com/) package manager

## Installation

At the present time, this probably only work on Chrome 85+ on Android devices with the [experimental web platform features](chrome://flags/#enable-experimental-web-platform-features) enabled. After enabling these features, verify the permissions to access NFC via [permission.site](https://permission.site/).

1. Clone the repository and access run `yarn install`. This will install all the required dependencies.

## Usage

Run:

```bash
yarn start
```

This will start a `browser-sync` localhost server, that you can access using your mobile device connected to the same subnet.

```bash
yarn run v1.22.10
$ browser-sync -w --https
[Browsersync] Access URLs:
 ---------------------------------------
       Local: https://localhost:3000
    External: https://192.168.1.53:3000
 ---------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ---------------------------------------
```

Access the external URL from your mobile device and a gray full screen _card_. Clicking the card should display a response in the dev console at your desktop instance. The desktop instance opens automatically when you run the `start` script.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Resources

* [Interact with NFC devices on Chrome for Android](https://web.dev/nfc/)