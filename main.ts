bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
スマートハウス見守り.TVがONされたとき(function (tvON) {
    basic.showIcon(IconNames.Heart)
})
bluetooth.startUartService()
