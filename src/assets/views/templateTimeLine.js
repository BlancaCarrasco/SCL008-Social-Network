export const templateTimeLine = () =>{
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;


  document.getElementById('root').innerHTML='';
  const containerTimeLine = document.createElement('div');
  const contentTimeLine = `
                        <div class=''>
                      <div class='row'>
                        <div class='column'>
                          <div class='logo'>
                          </div>
                        </div>
                        <div class='column'>
                          <div class='grid-title'>
                            Allergy Bites
                          </div>
                        </div>
                      </div>
                    </div>          
                        <section class="options">
                            <i class="fas fa-search search-icon"></i>
                         <select>
                            <option>Celíaco</option>
                            <option>Diabético</option>
                        </select>
                    </section>
                    <div id="timeline">
                      <div class='row'>
                        <div class='column'>
                          <div class='grid-one'>
                            Some Text in Column One
                          </div>
                        </div>
                      </div>
                    </div>
                    
                   
                    <footer>
                    <a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="timeline"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>`;
                    
          

  containerTimeLine.innerHTML= contentTimeLine;

    const db = firebase.database();
    const ref = db.ref("recipe");
    const refTimeline = containerTimeLine.querySelector('#timeline');
    ref.orderByChild("recipe").on("child_added", function(snapshot) {
        refTimeline.innerHTML += `<div class='row'>
                        <div class='column'>
                          <div class='grid-one'>
                            ${snapshot.val().recipe}
                          </div>
                        </div>
                      </div>`;
        console.log('recipes');
        console.log(snapshot.key + " was " + snapshot.val().recipe + " meters tall");
    });
  
  return containerTimeLine;
  
}