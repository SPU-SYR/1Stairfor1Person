from flask import Flask, request, render_template
from multiprocessing import Process, Queue, Value
import os
import ssl
import loadcell_setup as lc_setup
from hx711 import HX711
import loadcell as lc

import RPi.GPIO as GPIO  # import GPIO
import time # import the class HX711
import sys
import loadcell_setup as lc_setup

app = Flask(__name__)
app.debug = True

def loadcell_tt(q, result):
    time.sleep(3)
    isFirst = True
    w_left_prev = 0
    w_left_pres = 0
    w_right_prev = 0
    w_right_pres = 0
    count = 0
    hx_left, hx_right = lc_setup.loadcell_setup()
    
#   q.get() is empty when there is no input inside queue
    while q.get():
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
        print("count: ", count)
        q.put(True)
    result.put(count)
    

@app.route("/")
def index():
    return render_template('index.html')

is_true = True
q = Queue()
result = Queue()
th = None
@app.route('/api', methods=['POST'])
def api():
    global is_true
    global q, result
    global th
    if is_true:
        is_true = False
        
    if request.method == 'POST':
        st = request.values.to_dict()['test']
        if st =='start':
            th = Process(target=loadcell_tt, args=(q, result))
            th.start()
            q.put(True)
            return "start"
        if st == 'stop':
            q.put(False)
            GPIO.cleanup()
            return str(result.get())

    
if __name__ == '__main__':
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS)
    ssl_context.load_cert_chain(certfile='cert.pem', keyfile='key.pem')
    app.run(host="0.0.0.0", port=6525, debug=True, ssl_context=ssl_context)
