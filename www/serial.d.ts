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

export declare class Serial extends IonicNativePlugin {
    /**
     * Request permission to connect to a serial device
     * @param {SerialPermissionOptions} [options] Options used to request serial permissions for an unknown device
     * @return {Promise<any>} Returns a promise that resolves when permissions are granted
     */
    // @ts-ignore
    requestPermission(options?: SerialPermissionOptions): Promise<any>;
    /**
     * Open connection to a serial device
     * @param {SerialOpenOptions} options Options used to open serial connection
     * @return {Promise<any>} Returns a promise that resolves when the serial connection is opened
     */
    open(options: SerialOpenOptions): Promise<any>;
    /**
     * Write to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @return {Promise<any>} Returns a promise that resolves when the write is complete
     */
    write(data: any): Promise<any>;
    /**
     * Write hex to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @return {Promise<any>} Returns a promise that resolves when the write is complete
     */
    writeHex(data: any): Promise<any>;
    /**
     * Read from a serial connection
     * @return {Promise<any>} Returns a promise that resolves with data read from the serial connection
     */
    read(): Promise<any>;
    /**
     * Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable
     * @returns {Observable<any>} Observable returns an observable that you can subscribe to
     */
    registerReadCallback(): Observable<any>;
    /**
     * Close the serial connection
     * @return {Promise<any>} Returns a promise that resolves when the serial connection is closed
     */
    close(): Promise<any>;
}