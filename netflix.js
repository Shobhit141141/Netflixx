var button=["#q1","#q2","#q3","#q4"];
var but1=document.querySelector(button[0]);
var but2=document.querySelector(button[1]);
var but3=document.querySelector(button[2]);
var but4=document.querySelector(button[3]);
var answer=["#ans1","#ans2","#ans3","#ans4"];
var ans1=document.querySelector(answer[0]);
var ans2=document.querySelector(answer[1]);
var ans3=document.querySelector(answer[2]);
var ans4=document.querySelector(answer[3]);
var cross=["#x1","#x2","#x3","#x4"];
var x1=document.querySelector(cross[0]);
var x2=document.querySelector(cross[1]);
var x3=document.querySelector(cross[2]);
var x4=document.querySelector(cross[3]);
but1.onclick = function(){
    if(ans1.className=="open")
    {
        ans1.className="";
        x1.style.transform="rotate(0deg)";
    }else{
        ans1.className="open";
        x1.style.transform ="rotate(45deg)";
        ans2.className="";
        ans3.className="";
        ans4.className="";
        x2.style.transform="rotate(0deg)";
        x3.style.transform="rotate(0deg)";
        x4.style.transform="rotate(0deg)";
    }
};

    
    
but2.onclick = function(){
    if(ans2.className=="open")
    {
        ans2.className="";
        x2.style.transform="rotate(0deg)";
    }else{
        ans2.className="open";
        x2.style.transform ="rotate(45deg)";
        ans1.className="";
        ans3.className="";
        ans4.className="";
        x1.style.transform="rotate(0deg)";
        x3.style.transform="rotate(0deg)";
        x4.style.transform="rotate(0deg)";
        
        
    }
};

but3.onclick = function(){
    if(ans3.className=="open")
    {
        ans3.className="";
        x3.style.transform="rotate(0deg)";
    }else{
        ans3.className="open";
        x3.style.transform ="rotate(45deg)";
        ans1.className="";
        ans2.className="";
        ans4.className="";
        x1.style.transform="rotate(0deg)";
        x2.style.transform="rotate(0deg)";
        x4.style.transform="rotate(0deg)";
        
    }
};

but4.onclick = function(){
    if(ans4.className=="open")
    {
        ans4.className="";
        x4.style.transform="rotate(0deg)";
    }else{
        ans4.className="open";
        x4.style.transform ="rotate(45deg)";
        ans1.className="";
        ans2.className="";
        ans3.className="";
        x1.style.transform="rotate(0deg)";
        x2.style.transform="rotate(0deg)";
        x3.style.transform="rotate(0deg)";
        
    }
};
