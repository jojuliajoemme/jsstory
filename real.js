<!DOCTYPE html>
<html>

<style>

 footer {
    color: black;
    background-color: Bisque;
    clear: left;
    text-align: center;
    bottom: 0px;
}
</style>
<body>
   
<center><img id = "setting" src="seattleSkylineF.JPG" style="width:800px;height:400px;"></center>

<footer>
<center><h2 id = "header">Welcome!</h2></center>
<center><p id = "textBox">You have been working at TechCorp for a while. Although you love your job, you and the other few ladies on your floor have noticed some issues and are upset. You have decided to try to change your old habits and make a stand against these problems. Even with this mindset, the issues that you run into are hard to navigate.</p></center>
 <center><button type="button" onclick="firstDecision()" id="button1">Fired up, ready to go?</button></center>
 
 <button type="button" onclick="secondDecision()" id="OptionA" style= "visibility:hidden;">Dismiss</button>
 <button type="button" onclick="thirdDecision()" id="OptionB" style= "visibility:hidden;">Talk to manager</button>
 
</footer>

 <script type="text/javascript">
 
//  function changeText() {
//   document.getElementById("header").innerHTML = "Monday"
//    document.getElementById("textBox").innerHTML = "You were working on code all weekend because it had to be finished by today, Monday. Your manager assigns a coworker named Anthony to check your code even though you are his superior."
// }
  

 
  
 function endGame1() {
  document.getElementById('setting').src='seattleSkylineEnd.JPG';
  document.getElementByID('textBox').innerHTML= "You ask Anthony about what his friends and him did in the breakroom and he responds with ‘That’s just guys being guys.’  When he says this you shoot back with ‘So do you also think that that guy at Google was just being a guy when he sent out that memo degrading women?’ Your manager’s boss, a woman named Hillary, walks in and hears you. She pulls you aside after you talk to Anthony and says she was glad you brought up the Google issue and how the memo was wrong in its statements about women. She says that the two of you should put on a seminar at the company on how to treat women in the workplace to eliminate sexism. THE END.";

 }
 
 function endGame2() {
  document.getElementById('setting').src= 'seattleSkylineEnd.JPG';
  document.getElementById("textBox").innerHTML = "You are known around the company as a pushover and you lose confidence on yourself. THE END.";
 
 }
 
 function endGame3() {
  document.getElementById('setting').src= "seattleSkylineEnd.JPG";
  document.getElementById('textBox').innerHTML= "Your coworkers now expect you to always clean up.You’re still a valued member of the team but are seen as a secretary as well. THE END.";
}

function endGame4() {
  document.getElementById("textBox").innerHTML = "Your manager talks to the men, but it doesn’t really make a difference. The men keep doing the same thing.  Your manager proceeds to mansplain the situation to you. You find your manager’ behavior rude and call him out on his mansplaining.You find your manager’ behavior rude and call him out on his mansplaining. THE END";
  document.getElementById('setting').src= "seattleSkylineEnd.JPG";
}

function firstDecision() {
 document.getElementById("button1").style.visibility= "hidden";
  document.getElementById("header").innerHTML = "Monday";
   document.getElementById('setting').src= 'lobbySS.JPG';
    document.getElementById("textBox").innerHTML = "You were working on code all weekend because it had to be finished by today, Monday. Your manager assigns a coworker named Anthony to check your code even though you are his superior. Do you dismiss this or go talk to your manager?";
      document.getElementById("OptionA").style.visibility = "visible";
       document.getElementById("OptionB").style.visibility = "visible";
     
}
 
 function secondDecision() {
     document.getElementById("textBox").innerHTML = "Anthony finds a small error in your code and begins to mansplain to you why your code is wrong, Do you try to keep your cool or tell him what he’s doing wrong?";
     document.getElementById("OptionA").innerHTML= "Keep cool";    
     document.getElementById("OptionA").onclick=function(){fourthDecision()};
     document.getElementById("OptionB").innerHTML= "Tell him";
     document.getElementById("OptionB").onclick=function(){fifthDecision()};
          document.getElementById("setting").src= "breakroom.SS.JPG";

 }
 
 function thirdDecision() {
     document.getElementById("textBox").innerHTML ="Your manager, Jack, says 'Anthony was the only one available and somebody’s gotta check your code!' One week later, you and your team have finished presenting a project. Your team, a group of guys, decides to head out for drinks. You don’t really feel included, so you don’t go. Before leaving the room, Logan asks if you can stick around and tidy up the meeting room. Do you say it’s not your job to do or do you just agree?";
      document.getElementById("OptionA").innerHTML="say something";
       document.getElementById("setting").src="meetingroom.SS.JPG";
       document.getElementById("OptionA").onclick=function(){sixthDecision()};
        document.getElementById("OptionB").innerHTML="agree";
         document.getElementById("OptionB").onclick=function(){endGame3()};
 }
 
 function fourthDecision() {
     document.getElementById("textBox").innerHTML = "Anthony keeps making this mistake, resulting in time being wasted. Your manager is annoyed and your team gets a bad reputation for not getting work done. Do you take the blame or call Anthony out?";
     document.getElementById("OptionA").innerHTML="take";
     document.getElementById("setting").src= "HallwayAnthonyBoss.JPG";
     document.getElementById("OptionA").onclick=function(){endGame2()};
     document.getElementById("OptionB").innerHTML="call out";
     document.getElementById("OptionB").onclick=function(){fifthDecision()};
 }
 
  function fifthDecision() {
     document.getElementById("textBox").innerHTML = "Anthony gets really annoyed with you for calling him out. The next day you enter breakroom. Anthony and his friends, Adrian, Logan, and Chase are  all joking around, but they stop when you enter. Do you ask him Anthony about the incident later or confront the group right now?";
     document.getElementById("OptionA").innerHTML="now";
     document.getElementById("setting").src="breakroom.SS.JPG";
     document.getElementById("OptionA").onclick=function(){seventhDecision()};
     document.getElementById("OptionB").innerHTML="later";
     document.getElementById("OptionB").onclick=function(){endGame1()}; 
 }
  
 function sixthDecision() {
     document.getElementById("textBox").innerHTML = "All the guys reenter the room and stare at you. Someone mutters “Bitch.” They all reluctantly pick up their trash.While they give you looks, you tell them “You know I do the same amount of work as you, and get paid less. The least you can do is clean up after yourself. Do you take this issue of disrespect to your manager or ask for a raise?";
     document.getElementById("setting").src="meetingroom.SS.JPG";
     document.getElementById("OptionA").innerHTML="manager";
     document.getElementById("OptionA").onclick=function(){endGame4()};
     document.getElementById("OptionB").innerHTML="raise";
     document.getElementById("OptionB").onclick=function(){eighthDecision()}; 
 }
  
  
 function seventhDecision() {
     document.getElementById("textBox").innerHTML = "You walk up to the group and say “What are you guys talking about?” In response, you get comments like “Since when were you the boss? Do you talk to your manager about their behavior or make a face at them? ";
     document.getElementById("setting").src="breakroom.SS.JPG";
     document.getElementById("OptionA").innerHTML="manager";
     document.getElementById("OptionA").onclick=function(){endGame4()};
     document.getElementById("OptionB").innerHTML="face";
     document.getElementById("textBox").innerHTML =" Because you made a face, you have a bad reputation among colleagues for acting immature. You make a batch of cookies to apologize to Anthony and his friends. After that, you also try very hard to be super nice to everyone. You’re still a valued member of the team but are seen as a secretary as well. THE END.";
     document.getElementById("OptionB").onclick=function(){endGame()};
}
  
function eighthDecision() {
     document.getElementById("textBox").innerHTML = "You realize you deserve more for all the work you do and talk to your manager about wage gap you are facing. Your manager says he can’t give you a raise at the moment. Instead, he offers you extra vacation days. Do you accept the vacation days or take this up with your manager’s boss?";
     document.getElementById("setting").src="meetingroomJustBossSS.JPG";
     document.getElementById("OptionA").innerHTML="vacation";
     document.getElementById("textBox").innerHTML = "You accept the extra vacation and use them to go to Hawaii. When you get back from your vacation, you realize you haven’t made any positive change in your work life as you had hoped. You realize you need to be more assertive. THE END.";
     document.getElementById("OptionA").onclick=function(){endGame()};
     document.getElementById("OptionB").innerHTML="boss";
     document.getElementById("textBox").innerHTML ="Your manager’s boss is a woman named Hillary, and she gives you a pay raise. This is not just because she feels bad for you, but because she honestly believes that you deserve it. THE END.";
     document.getElementById("OptionB").onclick=function(){endGame()};
}
    
   


</script>


 
 
  
</body>
</html>

