
import classes from './ReadmePopup.module.css'

export default function Readme(props) {


    return (
        <div className={classes.readme}>
            <span className={classes.xer} onClick={()=>props.shown((prev)=>!prev)}>×</span>
            <p>ES6 module and class based drag and drop example. Optimized and built using webpack with cache busting implemented
                on the files.</p>

            <p>Drag and drop príklad postavený na ES6 moduloch a klasách. Skompletizovaný a optimalizovaný cez webpack s "cache
                bustingom" na suboroch.</p>


        </div>
    )
}