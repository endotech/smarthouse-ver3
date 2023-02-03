/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

enum Choice {
    //% block="弱"
    Weak = 1,
    //% block="強"
    Strong = 2,
}

enum Choice2 {
    //% block="弱"
    Weak = 1,
    //% block="強"
    Strong = 2,
}
enum Choice3 {
    //% block="前進(低速)"
    Forwardlow = 1,
    //% block="前進(中速)"
    Forwardnormal = 2,
    //% block="前進(高速)"
    Forwardtop = 3,
    //% block="後進(低速)"
    Backlow = 4,
    //% block="後進(中速)"
    Backnormal = 5,
    //% block="後進(高速)"
    Backtop = 6,
    //% block="右に回転"
    TurnR = 7,
    //% block="左に回転"
    TurnL = 8,
    //% block="停止"
    Stop = 9,
    //% block="ごみ捨て"
    Trash = 10,
}

//% color="#AA278D" weight=100
//% icon="\uf015"
namespace スマートハウス制御 {

    //% block
    //% color="#996300" weight=100
    export function カスタム機器をつける() {
        bluetooth.uartWriteString("custom-ON")
    }
    //% block
    //% color="#996300" weight=100
    export function カスタム機器を消す() {
        bluetooth.uartWriteString("custom-OFF")
    }
    //% block
    //% color="#7b68ee" weight=100
    export function ロボット掃除機(choice: Choice3) {
        switch (choice) {
            case Choice3.Forwardlow: bluetooth.uartWriteString("forward-low")
                break;
            case Choice3.Forwardnormal: bluetooth.uartWriteString("forward-normal")
                break;
            case Choice3.Forwardtop: bluetooth.uartWriteString("forward-top")
                break;
            case Choice3.Backlow: bluetooth.uartWriteString("back-low")
                break;
            case Choice3.Backnormal: bluetooth.uartWriteString("back-normal")
                break;
            case Choice3.Backtop: bluetooth.uartWriteString("back-top")
                break;
            case Choice3.TurnR: bluetooth.uartWriteString("turn-right")
                break;
            case Choice3.TurnL: bluetooth.uartWriteString("turn-left")
                break;
            case Choice3.Stop: bluetooth.uartWriteString("stop")
                break;
            case Choice3.Trash: bluetooth.uartWriteString("trash")
                break;
        }
    }
    //% block
    //% color="#deb887" weight=100
    export function テレビをつける() {
        bluetooth.uartWriteString("TV-ON")
    }
    //% block
    //% color="#deb887" weight=100
    export function テレビを消す() {
        bluetooth.uartWriteString("TV-OFF")
    }
    //% block
    //% color="#008b8b" weight=100
    export function ドアの鍵を開ける() {
        bluetooth.uartWriteString("door-ON")
    }
    //% block
    //% color="#008b8b" weight=100
    export function ドアの鍵を閉める() {
        bluetooth.uartWriteString("door-OFF")
    }
    //% block
    //% color="#9D9087" weight=100
    export function エアコンを消す() {
        bluetooth.uartWriteString("air-OFF")
    }
    //% block
    //% color="#4682b4" weight=100
    export function 冷房(choice: Choice2) {
        switch (choice) {
            case Choice2.Weak: bluetooth.uartWriteString("cold-weak")
                break;  //処理1
            case Choice2.Strong: bluetooth.uartWriteString("cold-strong")
                break; //処理2
        }
    }
    //% block
    //% color="#fa8072" weight=100
    export function 暖房(choice: Choice) {
        switch (choice) {
            case Choice.Weak: bluetooth.uartWriteString("heat-weak")
            break;  //処理1
            case Choice.Strong: bluetooth.uartWriteString("heat-strong")
            break; //処理2
        }
    }
    //% block
    //% color="#999900" weight=100
    export function 室内照明をオンにする() {
        bluetooth.uartWriteString("LED-ON")
    }
    // note that Caml casing yields lower case
    // block text with spaces
    //% block
    //% color="#999900" weight=100
    export function 室内照明をオフにする() {
        bluetooth.uartWriteString("LED-OFF")
    }
}