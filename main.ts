function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
function 后退1秒 () {
    后退一点点(1)
}
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    0
    )
}
cBitIR.IR_callbackUserV2(function (message) {
    IR_value = message
    if (message == cBitIR.clb_IR_KeyValue(cBitIR.enIRkey.CH)) {
        run_value = 1
    } else if (message == cBitIR.clb_IR_KeyValue(cBitIR.enIRkey.PREV)) {
        run_value = 3
    } else if (message == cBitIR.clb_IR_KeyValue(cBitIR.enIRkey.NEXT)) {
        run_value = 0
    } else if (message == cBitIR.clb_IR_KeyValue(cBitIR.enIRkey.PLAY)) {
        run_value = 4
    } else if (message == cBitIR.clb_IR_KeyValue(cBitIR.enIRkey.Add)) {
        run_value = 2
    } else if (message == cBitIR.clb_IR_KeyValue(cBitIR.enIRkey.Add)) {
    	
    } else {
    	
    }
    basic.showNumber(run_value)
})
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    150
    )
}
input.onButtonPressed(Button.A, function () {
    speed += -50
    TM1650.showNumber(speed)
})
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0 - speed,
    makerobo.Motors.Right,
    0 - speed
    )
}
function 左转一点点 (持续时长: number) {
    makerobo.MotorRunDelay(makerobo.Motors.Left, 0 - speed, 持续时长 / 10)
    makerobo.MotorRunDelay(makerobo.Motors.Right, speed, 持续时长 / 10)
}
function 后退一点点 (持续时长: number) {
    makerobo.MotorRunDelay(makerobo.Motors.Left, 0 - speed, 持续时长)
    makerobo.MotorRunDelay(makerobo.Motors.Right, 0 - speed, 持续时长)
}
function 原来的代码 () {
    if (run_value == 1) {
        前进()
    } else if (run_value == 2) {
        后退()
    } else if (run_value == 3) {
        原地左转()
    } else if (run_value == 4) {
        原地右转()
    } else if (run_value == 0) {
        停止()
    } else {
    	
    }
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    speed,
    makerobo.Motors.Right,
    speed
    )
}
function 右转一点点 (持续时长: number) {
    makerobo.MotorRunDelay(makerobo.Motors.Left, speed, 持续时长 / 10)
    makerobo.MotorRunDelay(makerobo.Motors.Right, 0 - speed, 持续时长 / 10)
}
input.onSound(DetectedSound.Loud, function () {
    speed += 50
    TM1650.showNumber(speed)
})
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
function 前进一点点 (持续时长: number) {
    makerobo.MotorRunDelay(makerobo.Motors.Left, speed, 持续时长)
    makerobo.MotorRunDelay(makerobo.Motors.Right, speed, 持续时长)
}
function 前进1秒 () {
    前进一点点(1)
}
let run_value = 0
let IR_value = 0
let speed = 0
speed = 150
basic.showIcon(IconNames.Duck)
basic.pause(1000)
TM1650.showNumber(speed)
