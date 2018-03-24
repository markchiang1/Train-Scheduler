// Initialize Firebase
var config = {
    apiKey: "AIzaSyAniaG6jCigZEwfowDMEfMyrROjJYIBHQs",
    authDomain: "train-scheduler-5e846.firebaseapp.com",
    databaseURL: "https://train-scheduler-5e846.firebaseio.com",
    projectId: "train-scheduler-5e846",
    storageBucket: "train-scheduler-5e846.appspot.com",
    messagingSenderId: "454890324287"
  };

  firebase.initializeApp(config);

  var database=firebase.database()

  var trainName = ''
  var destination = ''
  var firstTrain = ''
  var frequency = ''

  var trainNumber =0 
 
  var currentDate = new Date()
  console.log(currentDate)

  function formComplete(){
      if($('#trainName').val().trim()!=='' && $('#trainDestination').val().trim()!=='' && $('#firstTrain').val().trim()!=='' && $('#trainRate').val().trim()!==''){
          console.log("hi") 
          return true;
      }
      else{
         return false 
      }
  }

  $(document).ready(function(){
      database.ref().on("child_added", function(snapshot) {
        var object = snapshot.val()
        var name = object.name
        var place= object.endPoint
        var rate = object.period
        var start = object.startTime
        var currentTime = moment()
        var currentFormatedTime = moment(currentTime).format('HH:mm')

        var timeAway = moment().diff(moment(start).format('HH:mm'),'minutes')
        console.log(timeAway)
        
        $('#trainSchedule').append("<tr><th scope ='row'></th><td>"+name+"</td><td>"+place+"</td> <td>"+rate+"</td><td>"+start+"</td></tr>")
        
    })

      $('#submit').on('click', function(e){
          e.preventDefault()
          if (formComplete()){
                trainName = $('#trainName').val().trim()
                destination = $('#trainDestination').val().trim()
                firstTrain = $('#firstTrain').val().trim()
                frequency = $('#trainRate').val().trim()
                trainNumber++
                database.ref().push({
                    trainCounter:trainNumber, name:trainName, endPoint:destination, startTime:firstTrain, period: frequency
                })

                
            }
        

          })//End of submit button function

      }) // End of doucment.ready (function())
    
