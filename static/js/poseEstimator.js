function rad2deg(deg){
    return deg * (180 / Math.PI);
}
function deg2rad(rad){
    return rad * (Math.PI / 180);
}


function degree_From_3points(left, middle, right)
{
    let vector_middle_left = new Vector(left.x - middle.x, left.y - middle.y);
    let vector_middle_right = new Vector(right.x - middle.x, right.y - middle.y);

    let angle = Vector.angleBetween(vector_middle_left, vector_middle_right);
    let deg_angle = rad2deg(angle);
    return deg_angle;

}

const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');
const audio4 = document.getElementById('audio4');

const audioPlay = document.getElementById('audioPlay');
audioPlay.src = "notPlaying";



// 무릎에 무리가 가지않게 허리 세워주세요.
function frontStepUp(result, a){
    // check whether it is knee dominant
    if(result !=null)
    {
        // left side
        if(result[11].visibility > 0.1 && result[23].visibility > 0.1 &&  result[25].visibility > 0.1)
        {
            let deg_angle = degree_From_3points(result[11], result[23], result[25]);
            if(deg_angle < 90.0)
            {
                //먼저 audio가 재생중인지 확인
                if(audio1.paused)
                {
                    audioPlay.src = "notPlaying"
                }
                // notPlaying일 경우만 audio를 재생 
                if(audioPlay.src == "notPlaying")
                {
                    audio1.play();
                    //이 후, audioPlay.src를 playing으로 바꾼다.
                    audioPlay.src = "Playing";
                }
                console.log("it's wrong!! - left side knee dominant" + "angle: " + deg_angle);
            }
        }
        // right side
        if(result[12].visibility > 0.1 && result[24].visibility > 0.1 &&  result[26].visibility > 0.1)
        {
            let deg_angle = degree_From_3points(result[12], result[24], result[26]);
            if(deg_angle < 90.0)
            {
                //먼저 audio가 재생중인지 확인
                if(audio1.paused)
                {
                    audioPlay.src = "notPlaying"
                }
                // notPlaying일 경우만 audio를 재생 
                if(audioPlay.src == "notPlaying")
                {
                    audio1.play();
                    //이 후, audioPlay.src를 playing으로 바꾼다.
                    audioPlay.src = "Playing";
                }
                console.log("it's wrong!! - right knee dominant" + "angle: " + deg_angle);
            }
        }
    }
}


// 한쪽 다리를 조금만 더 펴주세요
function lateralStepUp(result, a){
    if(result !=null)
    {
        // left side
        if(result[23].visibility > 0.1 && result[25].visibility > 0.1 &&  result[27].visibility > 0.1)
        {
            let deg_angle = degree_From_3points(result[23], result[25], result[27]);

            if(deg_angle < 150.0)
            {
                //먼저 audio가 재생중인지 확인
                if(audio2.paused)
                {
                    audioPlay.src = "notPlaying"
                }
                
                // notPlaying일 경우만 audio를 재생 
                if(audioPlay.src == "notPlaying")
                {
                    audio2.play();
                    //이 후, audioPlay.src를 playing으로 바꾼다.
                    audioPlay.src = "Playing";
                }
                console.log("it's wrong!! - 왼발 다리 펴!" + "angle: " + deg_angle);
            }
        }

        // right side
        if(result[24].visibility > 0.1 && result[26].visibility > 0.1 &&  result[28].visibility > 0.1)
        {

            let deg_angle = degree_From_3points(result[24], result[26], result[28]);

            if(deg_angle < 150.0)
            {
                //먼저 audio가 재생중인지 확인
                if(audio2.paused)
                {
                    audioPlay.src = "notPlaying"
                }
                // notPlaying일 경우만 audio를 재생 
                if(audioPlay.src == "notPlaying")
                {
                    audio2.play();
                    //이 후, audioPlay.src를 playing으로 바꾼다.
                    audioPlay.src = "Playing";
                }
                console.log("it's wrong!! - 오른발 다리 펴!" + "angle: " + deg_angle);
            }
        }
    }
}

// 허리에 무리가 가지않게 무릎을 낮춰주세요.
function hipExercise(result, a){
    // check whether it is knee dominant
    if(result !=null)
    {
        // left side
        if(result[11].visibility > 0.1 && result[23].visibility > 0.1 &&  result[25].visibility > 0.1)
        {
            let deg_angle = degree_From_3points(result[11], result[23], result[25]);
            if(deg_angle < 140.0)
            {                
                //먼저 audio가 재생중인지 확인
                if(audio3.paused)
                {
                    audioPlay.src = "notPlaying"
                }
                // notPlaying일 경우만 audio를 재생 
                if(audioPlay.src == "notPlaying")
                {
                    audio3.play();
                    //이 후, audioPlay.src를 playing으로 바꾼다.
                    audioPlay.src = "Playing";
                }
                console.log("it's wrong!! - left side 다리가 너무 뒤로 갔습니다." + "angle: " + deg_angle);
            }
        }


        // right side
        if(result[12].visibility > 0.1 && result[24].visibility > 0.1 &&  result[26].visibility > 0.1)
        {
            let deg_angle = degree_From_3points(result[12], result[24], result[26]);
            if(deg_angle < 140.0)
            {                
                //먼저 audio가 재생중인지 확인
                if(audio3.paused)
                {
                    audioPlay.src = "notPlaying"
                }
                // notPlaying일 경우만 audio를 재생 
                if(audioPlay.src == "notPlaying")
                {
                    audio3.play();
                    //이 후, audioPlay.src를 playing으로 바꾼다.
                    audioPlay.src = "Playing";
                }
                console.log("it's wrong!! - left side 다리가 너무 뒤로 갔습니다." + "angle: " + deg_angle);
            }
        }
    }

}