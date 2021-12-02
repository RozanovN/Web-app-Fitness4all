// back button
function goBack() {
    window.history.back();
}


//Log out and redirects to the index page
function logOut() {
    firebase.auth().signOut().then(() => {
        console.log("logged out");
        window.location.assign("index.html");
    })
}


































// Beach workouts displayed from database
function read_display_beach_workout_one() {
    console.log("Hello")
    db.collection("Workouts").doc("Beach workouts")
        .onSnapshot(BeachWork => {
            console.log("current document data: " + BeachWork.data().beachone);
            document.getElementById("beachone").src = BeachWork.data().beachone; //using javascript to display the data on the right place

        })


}

// display second beach workout
function read_display_beach_workout_two() {
    db.collection("Workouts").doc("Beach workouts")
        .onSnapshot(BeachWork => {

            document.getElementById("beachworktwo").src = BeachWork.data().beachworktwo; //using javascript to display the data on the right place

        })
}

// display third beach workout
function read_display_beach_workout_three() {
    db.collection("Workouts").doc("Beach workouts")
        .onSnapshot(BeachWork => {

            document.getElementById("beachthree").src = BeachWork.data().beachthree; //using javascript to display the data on the right place

        })
}


// local storage
function setWorkoutData(id) {
    localStorage.setItem('WorkoutID', id);
}



read_display_beach_workout_one();
read_display_beach_workout_two();
read_display_beach_workout_three();



// Get recommended beach workout (random)
// populate recommended workouts page with random workout which ha been recommended
const recommended = db.collection("Reviews").where("Recommend", "==", "Yes")
    .get()
    .then(recom => {

        size = recom.size;
        recomendations = recom.docs;
        var code = recomendations[0].data()['code'];
        // console.log(code)

        function read_recommended() {
            db.collection("Workouts").doc("Beach workouts")
                .onSnapshot(RecommendedDoc => {
                    console.log(RecommendedDoc.data()[code])
                    document.getElementById("recommended").src = RecommendedDoc.data()[code]
                })
        }

        read_recommended()

    })