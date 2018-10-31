# **Train-Scheduler**

>Welcome to Mark's Train Station!

### Overview

Train schedule application that shows arrival and departure times of trains coming through Mark's Station. This website provides up-to-date information about various trains after user inputs the train name,  destination, first train arrival time, and frequency. 

The train's next arrival time will be displayed and how many minutes remain until the next arrival at the station.

### Key Technologies

* Firebase
* Moment.js

### How this Applicaiton Works (Backend)

* incorporates Firebase to host arrival and departure data.

* retrieve data from Firebase and manipulate this information with Moment.js.


### Future Improvements

* Consider updating "minutes to arrival" and "next train time" text once every minute. (Maybe create a second GitHub repo).

* Try adding `update` and `remove` buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).

* As a final challenge, make it so that only users who log into the site with their Google or GitHub accounts can use your site. You'll need to read up on Firebase authentication for this bonus exercise.



