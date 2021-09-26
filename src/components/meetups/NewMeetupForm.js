import CardPassive from '../ui/Card-passive';
import classes from './NewMeetupForm.module.css'

export default function NewMeetupForm({passUp}) {

    function submitHandler(e) {
        e.preventDefault()
        let title = e.target.title.value
        let picture = e.target.picture.value
        let address = e.target.address.value
        let info = e.target.info.value

        const newMeetupData = {
            title: title,
            picture: picture,
            address: address,
            info: info,
        }

        passUp(newMeetupData)
    }


    return <CardPassive>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Názov Stretávky</label>
                <input type="text" required id="title"></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="picture">Obrázok Stretávky</label>
                <input type="url" required id="picture"></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Adresa</label>
                <input type="text" required id="address"></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="info">Info</label>
                <textarea id="info" required rows="5"></textarea>
            </div>
            <div className={classes.actions}>
                <button>Pridaj</button>
            </div>
        </form>
    </CardPassive>
}
