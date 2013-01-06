call("+14077586356", {
   callerID:"14242817736"});
wait(500);
say("Hello Diggz.  Would you like to play a game?" , {voice:"Dave"});


wait(200);

myCallerID=currentCall.callerID;
myCalledID=currentCall.calledID;
mySessionID=currentCall.sessionId;

if(currentCall.initialText){
message('+) What I love about Chris Saad: ' + currentCall.initialText + ' from ' + myCallerID, {
    to:"+13142827223",
    network:"SMS"
});
}
else {

say("Thank you for calling the Chris Sod love line.", {voice:"alan"});

record("Please record what you love about Chris Sod after the beep and your message will be whisked away to Chris Sod so he can instantly feel your love.", {
   beep:true,
   recordFormat:"audio/wav",
   voice:"alan",
   timeout:10,
    silenceTimeout:7,
    maxTime:240,
   recordURI:"ftp://jhiggins:newone222@10.7.130.174/InetPub/wwwroot/gwob.org/wwwroot/messages/"+currentCall.callerID+"-"+currentCall.calledID+"-"+currentCall.sessionId+".wav",
    transcriptionOutURI: "mailto:chris@aboutecho.com",
    transcriptionID:"http://66.193.54.174/gwob.org/wwwroot/messages/"+myCallerID+"-"+myCalledID+"-"+mySessionID+".wav"
    }
);
 
hangup();
 
call('+13142827223', {
  network:"SMS"});
say("+) Incoming Love: http://66.193.54.174/gwob.org/wwwroot/messages/"+myCallerID+"-"+myCalledID+"-"+mySessionID+".wav");

}