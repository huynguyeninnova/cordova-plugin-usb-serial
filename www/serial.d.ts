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
 * @name Serial
 * @description
 * This plugin provides functions for working with Serial connections
 *
 * @usage
 * ```typescript
 * import { Serial } from '@ionic-native/serial/ngx';
 *
 * constructor(private serial: Serial) { }
 *
 * ...
 *
 * this.serial.requestPermission().then(() => {
 *   this.serial.open({
 *     baudRate: 9800,
 *     dataBits: 4,
 *     stopBits: 1,
 *     parity: 0,
 *     dtr: true,
 *     rts: true,
 *     sleepOnPause: false
 *   }).then(() => {
 *     console.log('Serial connection opened');
 *   });
 * }).catch((error: any) => console.log(error));
 *
 * ```
 */
export declare class SerialOriginal extends IonicNativePlugin {
    /**
     * Request permission to connect to a serial device
     *
     * @param options {SerialPermissionOptions} Options used to request serial permissions for an unknown device
     * @return {void} Returns a promise that resolves when permissions are granted
     */
    requestPermission(options?: SerialPermissionOptions, successCallback: Function, errorCallback: Function): void;
    /**
     * Open connection to a serial device
     *
     * @param options {SerialOpenOptions} Options used to open serial connection
     * @return {void} Returns a promise that resolves when the serial connection is opened
     */
    open(options: SerialOpenOptions, successCallback: Function, errorCallback: Function): void;
    /**
     * Write to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @return {void} Returns a promise that resolves when the write is complete
     */
    write(data: any, successCallback: Function, errorCallback: Function): void;
    /**
     * Write hex to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @return {void} Returns a promise that resolves when the write is complete
     */
    writeHex(data: any, successCallback: Function, errorCallback: Function): void;
    /**
     * Read from a serial connection
     *
     * @return {void} Returns a promise that resolves with data read from the serial connection
     */
    read(successCallback: Function, errorCallback: Function): void;
    /**
     * Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable
     *
     * @returns {Observable<any>} Observable returns an observable that you can subscribe to
     */
    registerReadCallback(successCallback: Function, errorCallback: Function): Observable<any>;
    /**
     * Close the serial connection
     *
     * @return {void} Returns a promise that resolves when the serial connection is closed
     */
    close(successCallback: Function, errorCallback: Function): void;
}

export declare const Serial: SerialOriginal;