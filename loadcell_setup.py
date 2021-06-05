import statistics as stat
import time

import RPi.GPIO as GPIO
from hx711 import HX711

def loadcell_setup():
    GPIO.setmode(GPIO.BCM)  # set GPIO pin mode to BCM numbering
                                # GPIO.BCM은 브로드컴칩의 번호를 참조하겠다는 것으로서 그림 9.1의 GPIOXX 에서 XX에 해당하는 번호를 사용하겠다는 것이다.
    GPIO.setwarnings(False)
        
    referenceUnit = 1
        
    # Create an object hx which represents your real hx711 chip
    # Required input parameters are only 'dout_pin' and 'pd_sck_pin'
    hx_left = HX711(dout_pin = 5, pd_sck_pin = 6, gain_channel_A = 64, select_channel = 'A')
    hx_right = HX711(dout_pin = 23, pd_sck_pin = 24, gain_channel_A = 64, select_channel = 'A')

    result_left = hx_left.reset()
    result_right = hx_left.reset()

    print("is hx_left ready?:", hx_left._ready())
    print("is hx_right ready?:", hx_right._ready())

    if (result_left & result_right):
        print("not ready")
    else:
        print("Ready to use")
            
    print("hx_left using channel: " , hx_left.get_current_channel())
    print("hx_right using channel: " , hx_right.get_current_channel())
        
    hx_left.zero()
    hx_right.zero()
        

    w_left = (hx_left.get_weight_mean(5))
    w_right = (hx_right.get_weight_mean(5))
            
    print("first left: ", w_left, "fist right: ", w_right)

        
    print("hx_left using gain (64 || 128): " , hx_left.get_current_gain_A())
    print("hx_right using gain (64 || 128): " , hx_right.get_current_gain_A())
    
    return hx_left, hx_right