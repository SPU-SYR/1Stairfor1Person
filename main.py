import statistics as stat
import time
import RPi.GPIO as GPIO  # import GPIO
import sys
import loadcell_setup as lc_setup
from hx711 import HX711
import loadcell as lc

def main():
    hx_left, hx_right = lc_setup.loadcell_setup()
    lc.loadcell_count(hx_left, hx_right, isDone = False)
    GPIO.cleanup()

if __name__ == "__main__":
    main()
