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
