/**
 * Created by riggs on 2017/9/7
 *
 * USB HID utility for WebUSB.
 */

import Parser from 'typings/binary_parser';
import Buffer from 'typings/buffer';

interface String {
    padStart(targetLength: number, padString?: string): string;
}

interface MapConstructor {
    assign(target: Map<any, any>, ...sources: Array<Map<any, any> | Array<[any, any]>>): Map<any, any>
}

interface Map<K, V> {
    update(...sources: Array<Map<any, any> | Array<[any, any]>>): Map<K, V>
    asObject(): any
}

interface Navigator {
    hid: any;
}

interface Window {
    Buffer: Buffer;
    Parser: Parser;
    Platform_UUIDs: {[platform: string]: Array<number>}
}
