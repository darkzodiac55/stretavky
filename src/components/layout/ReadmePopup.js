
import classes from './ReadmePopup.module.css'

export default function Readme(props) {


    return (
        <div className={classes.readme}>
            <span className={classes.xer} onClick={() => props.shown((prev) => !prev)}>×</span>
            <p>

                Mini aplikácia na menežovanie napríklad firemných "stretávok".</p>

                <p>Použitý React s najnovšími fíčurami (hooks, functional components, app wide context) a simple backend databáza/API s použitím Google Firebase. Obľúbené su handled cez localStorage.
                </p>




        </div>
    )
}