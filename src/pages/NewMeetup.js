import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const historyObj = useHistory()
  
  async function getNewMeetup(meetup) {
    
    let response = await fetch('https://stretavky-backend-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-type': 'application/json'
      }
    })
    let aresponse = await response.json()
    console.log(aresponse.name);
    historyObj.replace('/')
  }
  
  return <section>
    <h1>Pridaj novú stretávku</h1>
    <NewMeetupForm passUp={getNewMeetup}/>
  </section>;
}

export default NewMeetupPage;
