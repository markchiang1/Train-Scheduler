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
      
    var currentTime = moment()
    console.log(currentTime)

      $('#submit').on('click', function(e){
          e.preventDefault()
          if (formComplete()){
                trainName = $('#trainName').val().trim()
                console.log(trainName)
                destination = $('#trainDestination').val().trim()
                console.log(destination)
                firstTrain = $('#firstTrain').val().trim()
                console.log(firstTrain)
                frequency = $('#trainRate').val().trim()
                console.log(frequency)
                trainNumber++
                database.ref().push({
                    trainCounter:trainNumber, name:trainName, endPoint:destination, startTime:firstTrain, period: frequency
                })

                database.ref().on("child_added", function(snapshot) {
                    console.log(snapshot.val())
                    // console.log(snapshot)
                    // $('#trainSchedule').append("<tr><th scope='row'></th><td>"+database.ref().child)
                })
            }
            database.ref('/trainCounter').set({
                trainCounter:trainNumber
            })
        //     <tr>
        //     <th scope="row">1</th>
        //     <td>Mark</td>
        //     <td>Otto</td>
        //     <td>@mdo</td>
        //   </tr>

          })//End of submit button function

      }) // End of doucment.ready (function())
    
