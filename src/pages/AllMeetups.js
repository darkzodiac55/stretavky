import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

/* const FAKE_DATA = [
  {
    id: 'm1',
    title: 'Toto je prvá stretávka',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/Martin-IMG_1707.JPG',
    address: 'Stretávková 5, 03601 Martin',
    description:
      'Pozývam vás na úžasné prvé stretnutie. Určite bude super!',
  },
  {
    id: 'm2',
    title: 'Toto je druhá stretávka',
    image:
      'https://onlyslovakia.com/wp-content/uploads/Zilina-1.jpg',
    address: 'Stretávková 2, 12345 Žilina',
    description:
      'Pozývam vás na úžasné druhé stretnutie. Určite bude super!',
  },
]; */

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(()=>{
    setIsLoading(true)
    async function fetchMeetups(params) {
      let response = await fetch('https://stretavky-backend-default-rtdb.firebaseio.com/meetups.json')
      let data = await response.json()
      
      for (const key in data) {
        /* let nmeetup = Object.assign({},data[key])
        nmeetup.id = key
        nmeetup.key = key */
        let nmeetup = {
          id: key,
          key: key,
          ...data[key]
        }
        setLoadedMeetups((prev)=>[...prev, nmeetup])
        
      }

      setIsLoading(false)
    }
    fetchMeetups()
    
  },[setLoadedMeetups,setIsLoading])

  console.log(loadedMeetups);

  if (isLoading) {
    return (
      <section>
        <h2>Načítavam z databázy...</h2>
      </section>
    )
  }

  return (
    <section>
      <h1>Všetky stretávky</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
