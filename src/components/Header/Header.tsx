import React from "react"
import "./Header.css"
import icon from "./pokemon.png"
import { Link } from "react-router-dom"

interface State {
    isOpen: Boolean
}
interface Props {

}
class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            isOpen: false,

        }

    }

    handleOnClick = () => {
        this.setState({ isOpen: !this.state.isOpen })

    }

    closeDropdown = () => {
        this.setState({ isOpen: false })
    }


    render() {



        return (
            <header className="header">
                <div className="headerItems">
                    <i onClick={this.handleOnClick} className="fas fa-bars" />
                    <Link to="/">
                        <img onClick={this.closeDropdown} className="pokemonTitle"
                            src="https://fontmeme.com/permalink/200304/fe08af5a72abf719bf67178557262a8f.png"
                            alt="Title" />
                    </Link>
                    <Link to="/favourites/">
                        <img className="pokemonIcon" src={icon} alt="icon" />
                    </Link>
                </div>
                {this.state.isOpen &&
                    <div onClick={this.handleOnClick} className="linkDiv" style={{ height: "260px" }}>
                        <Link className="links" to={{
                            pathname: '/category/red',
                            state: {
                                color: "red"
                            }
                        }}>Red</Link>
                        <Link className="links" to={{
                            pathname: '/category/red',
                            state: {
                                color: "red"
                            }
                        }}>Red</Link>
                        <Link className="links" to={{
                            pathname: '/category/blue',
                            state: {
                                color: "blue"
                            }
                        }}>Blue</Link>
                        <Link className="links" to={{
                            pathname: '/category/red',
                            state: {
                                color: "red"
                            }
                        }}>Red</Link>
                        <Link className="links" to={{
                            pathname: '/category/red',
                            state: {
                                color: "red"
                            }
                        }}>Red</Link>
                        
                    </div>}
            </header>
        )
    }


}


export default Header