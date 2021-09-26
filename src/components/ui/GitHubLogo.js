import logo from '../../image/GitHub-Mark-120px-plus.png'
import classes from './GitHubLogo.module.css'

export default function GitHubLogo(params) {

    return (
        <div className={classes.gh}>
            <a href="https://github.com/darkzodiac55/stretavky/blob/main/README.md">
                <img src={logo} alt="github-logo" />
            </a>
        </div>
    )
}