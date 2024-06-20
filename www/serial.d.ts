import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface SerialPermissionOptions {
    vid: string;
    pid: string;
    driver?: string;
}
export interface SerialOpenOptions {
    baudRate?: number;
    dataBits?: number;
    stopBits?: number;
    parity?: number;
    dtr?: boolean;
    rts?: boolean;
    sleepOnPause?: boolean;
}
/**
 * This callback is displayed as a global member.
 * @callback SuccessCallback
 */
/**
 * This callback is displayed as a global member.
 * @callback ErrorCallback
 * @param {any} e Error
 */

export declare class SerialOriginal extends IonicNativePlugin {
    /**
     * Request permission to connect to a serial device
     * @param {SerialPermissionOptions} [options] Options used to request serial permissions for an unknown device
     * @param {SuccessCallback} successCallback Success callback
     * @param {ErrorCallback}  errorCallback Success callback
     * @return {void} Returns a promise that resolves when permissions are granted
     */
    // @ts-ignore
    requestPermission(options?: SerialPermissionOptions, successCallback: Function, errorCallback: Function): void;
    /**
     * Open connection to a serial device
     * @param {SerialOpenOptions} options Options used to open serial connection
     * @param {SuccessCallback} successCallback Success callback
     * @param {ErrorCallback}  errorCallback Success callback
     * @return {void} Returns a promise that resolves when the serial connection is opened
     */
    open(options: SerialOpenOptions, successCallback: Function, errorCallback: Function): void;
    /**
     * Write to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @param {SuccessCallback} successCallback Success callback
     * @param {ErrorCallback}  errorCallback Success callback
     * @return {void} Returns a promise that resolves when the write is complete
     */
    write(data: any, successCallback: Function, errorCallback: Function): void;
    /**
     * Write hex to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @param {SuccessCallback} successCallback Success callback
     * @param {ErrorCallback}  errorCallback Success callback
     * @return {void} Returns a promise that resolves when the write is complete
     */
    writeHex(data: any, successCallback: Function, errorCallback: Function): void;
    /**
     * Read from a serial connection
     * @param {SuccessCallback} successCallback Success callback
     * @param {ErrorCallback}  errorCallback Success callback
     * @return {void} Returns a promise that resolves with data read from the serial connection
     */
    read(successCallback: Function, errorCallback: Function): void;
    /**
     * Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable
     * @param {SuccessCallback} successCallback Success callback
     * @param {ErrorCallback}  errorCallback Success callback
     * @returns {Observable<any>} Observable returns an observable that you can subscribe to
     */
    registerReadCallback(successCallback: Function, errorCallback: Function): Observable<any>;
    /**
     * Close the serial connection
     * @param {SuccessCallback} successCallback Success callback
     * @param {ErrorCallback}  errorCallback Success callback
     * @return {void} Returns a promise that resolves when the serial connection is closed
     */
    close(successCallback: Function, errorCallback: Function): void;
}

export declare const Serial: SerialOriginal;