# 1Stairfor1Person

#### 1. Use openpose for checking whether person is doing several step-excercises: 
```
- Openpose code runs in javascript
- OpenPose source code is from https://google.github.io/mediapipe/solutions/pose.html
```

#### 2. Use loadcells for checking total count a person stepped up and down the step-box checking difference of weights measured
```
- source code of running load cells runs in raspberry using flask server
- when a user clicks stop button in webpage, ajax sends request using POST method to flask server 
  and flask server stops counting and response with total count of how many times user stepped up and down 
  (one step up-down counted as one)
- source code for running loadcell in raspberry is from https://github.com/gandalf15/HX711
```

#### 3. Webpage Explantion
```
- webpage is composed of five pages
  1. showing title 
  2. three for each exercise - front step up, lateral step up, hip exercise, lunge exercise
```

#### 4. Photo of raspberry pi
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

#### 4. Configuration of load cells - three wires Load Cells
```
- each load cell can measure up to 50kg
- circuit: full bridge circuit of load cell
- load cell tutorial: https://www.youtube.com/watch?v=sxzoAGf1kOo
- 3d printing for load cell frame: https://www.thingiverse.com/thing:4602226

```
![KakaoTalk_20210605_231244478_02](https://user-images.githubusercontent.com/45995611/120894658-8ec8aa00-c654-11eb-9baa-ceb409e96133.jpg)



#### 5. Configuration
![KakaoTalk_20210605_231244478](https://user-images.githubusercontent.com/45995611/120894832-60979a00-c655-11eb-8bb1-abe28524d66d.jpg)
