const Serial = {
  requestPermission: function (opts) {
    return new Promise((resolve, reject) => {
      cordova.exec(
        (r) => resolve(r),
        (e) => reject(e),
        "Serial",
        "requestPermission",
        [{ opts: opts }]
      );
    });
  },
  open: function (opts) {
    return new Promise((resolve, reject) => {
      cordova.exec(
        (r) => resolve(r),
        (e) => reject(e),
        "Serial",
        "openSerial",
        [{ opts: opts }]
      );
    });
  },
  write: function (data) {
    return new Promise((resolve, reject) => {
      cordova.exec(
        (r) => resolve(r),
        (e) => reject(e),
        "Serial",
        "writeSerial",
        [{ data: data }]
      );
    });
  },
  writeHex: function (hexString) {
    return new Promise((resolve, reject) => {
      cordova.exec(
        (r) => resolve(r),
        (e) => reject(e),
        "Serial",
        "writeSerialHex",
        [{ data: hexString }]
      );
    });
  },
  read: function () {
    return new Promise((resolve, reject) => {
      cordova.exec(
        (r) => resolve(r),
        (e) => reject(e),
        "Serial",
        "readSerial",
        []
      );
    });
  },
  close: function () {
    return new Promise((resolve, reject) => {
      cordova.exec(
        (r) => resolve(r),
        (e) => reject(e),
        "Serial",
        "closeSerial",
        []
      );
    });
  },
  registerReadCallback: function () {
    return new Promise((resolve, reject) => {
      cordova.exec(
        (r) => resolve(r),
        (e) => reject(e),
        "Serial",
        "registerReadCallback",
        []
      );
    });
  },
};
module.exports = Serial;
