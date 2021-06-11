# 1Stairfor1Person
The purpose of this project is 

## 1. Requirments
Code is written in JavaScript and Python3.6 requires:
* Library
  * _Flask_
  * _pyOpenSSL_
  * _OpenPose_
  * _LoadCell_
* HardWare
  * _Raspbarry PI 3+_
  * _LoadCell_
  * _HX711_
  * _WebCam_

----------

## 2. Installation
**Flask**
```
pip install flask
```
**pyOpenSSL**
```
pip install pyOpenSSL
```
**OpenPose**
>This is OpenSource Library. Please check [follow](https://google.github.io/mediapipe/solutions/pose.html
).
```
https://google.github.io/mediapipe/solutions/pose.html
```
**LoadCell**
>This is OpenSource Library. Pleack check [follow](https://github.com/gandalf15/HX711
).
```
https://github.com/gandalf15/HX711
```

----------

## 3. HardWare
**Control Part**
```
- Two HX711 are used using parallel connection
 * HX711 for left side: 
    GPIO.setmode(GPIO.BCM)
    uses (dout_pin = 5, pd_sck_pin = 6, gain_channel_A = 64, select_channel = 'A')
    
 * HX711 for right side: 
    GPIO.setmode(GPIO.BCM)
    uses (dout_pin = 23, pd_sck_pin = 24, gain_channel_A = 64, select_channel = 'A')
```
![KakaoTalk_20210605_231244478_01](https://user-images.githubusercontent.com/45995611/120894526-d0a52080-c653-11eb-8a81-3c1917b480bc.jpg)

**Sensing Part**
```
- Each loadcell can measure up to 50kg
- Circuit: Full bridge circuit of loadcell
```
![KakaoTalk_20210605_231244478_02](https://user-images.githubusercontent.com/45995611/120894658-8ec8aa00-c654-11eb-9baa-ceb409e96133.jpg)
>* LoadCell Tutorial: https://www.youtube.com/watch?v=sxzoAGf1kOo
>* 3D Printing for LoadCell Frame: https://www.thingiverse.com/thing:4602226

**Whole Part**
![KakaoTalk_20210605_231244478](https://user-images.githubusercontent.com/45995611/120894832-60979a00-c655-11eb-8bb1-abe28524d66d.jpg)

----------

## 4. SoftWare
**Concept Diagram**
**WebPage Configuration**
*_1 Page_
*_2to4 Page_

----------

## 5. Demonstration
**Procedure**

**WebPage**
**Video**







#### 1. Use openpose for checking whether person is doing several step-excercises: 
```
* Openpose code runs in javascript
* OpenPose source code is from https://google.github.io/mediapipe/solutions/pose.html
```

#### 2. Use loadcells for checking total count a person stepped up and down the step-box checking difference of weights measured
```
* source code of running load cells runs in raspberry using flask server
* when a user clicks stop button in webpage, ajax sends request using POST method to flask server 
  and flask server stops counting and response with total count of how many times user stepped up and down 
  (one step up-down counted as one)
* source code for running loadcell in raspberry is from https://github.com/gandalf15/HX711
```

#### 3. Webpage Explantion
```
* webpage is composed of five pages
  - 1 Page : showing title 
  - 2 to 4 Page : introduction of each exercise (front step up, lateral step up, hip exercise, lunge exercise)
```

#### 4. Photo of raspberry pi
```
```
![KakaoTalk_20210605_231244478_01](https://user-images.githubusercontent.com/45995611/120894526-d0a52080-c653-11eb-8a81-3c1917b480bc.jpg)

#### 4. Configuration of load cells - three wires Load Cells
```

```
![KakaoTalk_20210605_231244478_02](https://user-images.githubusercontent.com/45995611/120894658-8ec8aa00-c654-11eb-9baa-ceb409e96133.jpg)



#### 5. Configuration
![KakaoTalk_20210605_231244478](https://user-images.githubusercontent.com/45995611/120894832-60979a00-c655-11eb-8bb1-abe28524d66d.jpg)
