#!/usr/bin/env python3
import RPi.GPIO as GPIO  # import GPIO
import time # import the class HX711
import sys
import loadcell_setup as lc_setup


def loadcell_count(hx_left, hx_right):
    isFirst = True
    w_left_prev = 0
    w_left_pres = 0
    
    w_right_prev = 0
    w_right_pres = 0
    
    count = 0
    try:     
        while True:
            # if the while loop is first, set prev = pres
                    
            if isFirst:
                w_left_prev = hx_left.get_weight_mean(3)
                w_right_prev = hx_right.get_weight_mean(3)
                w_left_pres = w_left_prev
                w_right_pres = w_right_prev
                isFirst = False
                
            else:
                w_left_prev = w_left_pres
                w_right_prev = w_right_pres
                w_left_pres = hx_left.get_weight_mean(3)
                w_right_pres = hx_right.get_weight_mean(3)
                
                                 
                    
            print("w_left_prev: ", w_left_prev, "w_right_prev: ", w_right_prev)
            print("w_left_pres: ", w_left_pres, "w_right_pres: ", w_right_pres)
            right_value = w_right_pres - w_right_prev
            left_value = w_left_pres - w_left_prev
            print("left: ", left_value, "right: ", right_value)
            time.sleep(1)

            if right_value > 100000:
                count+=1
                
            print(count)

    except (KeyboardInterrupt, SystemExit):
        print('Bye :)')


    finally:
        GPIO.cleanup()