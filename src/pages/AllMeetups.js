import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
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
      'Pozývam vás na úžasné prvé stretnutie. Určite bude super!',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>Všetky stretávky</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
