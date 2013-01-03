call(['+14077586356']{
   timeout:120,
   callerID:'14242817736',
      onAnswer: function() {
       say("Tag, you're it!");
       log("Obnoxious call complete");
   },
   onTimeout: function() {
       log("Call timed out");
   },
   onCallFailure: function() {
       log("Call could not be completed as dialed");
   }
});