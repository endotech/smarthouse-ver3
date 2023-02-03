/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
//% icon="\uf06e"
namespace スマートハウス見守り {
    let onReceivedString1: (receivedString1: string) => void = null;
    let onReceivedString2: (receivedString2: string) => void = null;
    let onReceivedString3: (receivedString3: string) => void = null;
    let onReceivedString4: (receivedString4: string) => void = null;
    let onReceivedString5: (receivedString5: string) => void = null;
    let onReceivedString6: (receivedString6: string) => void = null;
    let onReceivedString7: (receivedString7: string) => void = null;
    let onReceivedString8: (receivedString8: string) => void = null;
    let onReceivedString9: (receivedString9: string) => void = null;
    let onReceivedString10: (receivedString10: string) => void = null;
    let onReceivedString11: (receivedString11: string) => void = null;
    let onReceivedString12: (receivedString12: string) => void = null;
    let onReceivedString13: (receivedString13: string) => void = null;

    bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
        let data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        if (data == "LED-ON" && onReceivedString1) {
            onReceivedString1(data)
        } else if (data == "LED-OFF" && onReceivedString2) {
            onReceivedString2(data)
        } else if (data == "door-ON" && onReceivedString3) {
            onReceivedString3(data)
        } else if (data == "door-OFF" && onReceivedString4) {
            onReceivedString4(data)
        } else if (data == "TV-ON" && onReceivedString5) {
            onReceivedString5(data)
        } else if (data == "TV-OFF" && onReceivedString6) {
            onReceivedString6(data)
        } else if (data == "custom-ON" && onReceivedString7) {
            onReceivedString7(data)
        } else if (data == "custom-OFF" && onReceivedString8) {
            onReceivedString8(data)
        } else if (data == "air-OFF" && onReceivedString9) {
            onReceivedString9(data)
        } else if (data == "heat-weak" && onReceivedString10) {
            onReceivedString10(data)
        } else if (data == "heat-strong" && onReceivedString11) {
            onReceivedString11(data)
        } else if (data == "cold-weak" && onReceivedString12) {
            onReceivedString12(data)
        } else if (data == "cold-strong" && onReceivedString13) {
            onReceivedString13(data)
        }
        
    })

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="冷房が強にされたとき"
    //% color="#4682b4" weight=100
    export function 冷房が強にされたとき(handler: (coldStrong: string) => void) {
        onReceivedString13 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="冷房が弱にされたとき"
    //% color="#4682b4" weight=100
    export function 冷房が弱にされたとき(handler: (coldWeak: string) => void) {
        onReceivedString12 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="暖房が強にされたとき"
    //% color="#fa8072" weight=100
    export function 暖房が強にされたとき(handler: (heatStrong: string) => void) {
        onReceivedString11 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="暖房が弱にされたとき"
    //% color="#fa8072" weight=100
    export function 暖房が弱にされたとき(handler: (heatWeak: string) => void) {
        onReceivedString10 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="エアコンがOFFされたとき"
    //% color="#9D9087" weight=100
    export function エアコンがOFFされたとき(handler: (airOFF: string) => void) {
        onReceivedString9 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="カスタム機器がOFFされたとき"
    //% color="#996300" weight=100
    export function カスタム機器がOFFされたとき(handler: (customOFF: string) => void) {
        onReceivedString8 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="カスタム機器がONされたとき"
    //% color="#996300" weight=100
    export function カスタム機器がONされたとき(handler: (customON: string) => void) {
        onReceivedString7 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="TVがOFFされたとき"
    //% color="#deb887" weight=100
    export function TVがOFFされたとき(handler: (tvOFF: string) => void) {
        onReceivedString6 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="TVがONされたとき"
    //% color="#deb887" weight=100
    export function TVがONされたとき(handler: (tvON: string) => void) {
        onReceivedString5 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="ドアが施錠されたとき"
    //% color="#008b8b" weight=100
    export function ドアが施錠されたとき(handler: (doorOFF: string) => void) {
        onReceivedString4 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="ドアが解錠されたとき"
    //% color="#008b8b" weight=100
    export function ドアが解錠されたとき(handler: (doorON: string) => void) {
        onReceivedString3 = handler;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="室内照明がOFFにされたとき"
    //% color="#999900" weight=100
    export function 室内照明がOFFにされたとき(handler2: (ledOFF: string) => void) {
        onReceivedString2 = handler2;
    }

    /**
       * An event triggered when Bluetooth receives "LED-ON"
       */
    //% block="室内照明がONにされたとき"
    //% color="#999900" weight=100
    export function 室内照明がONにされたとき(handler: (ledON: string) => void) {
        onReceivedString1 = handler;
    }

}
