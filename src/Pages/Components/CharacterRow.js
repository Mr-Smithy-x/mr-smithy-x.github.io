import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import Character from "./Character";

export class CharacterRow extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {characters, index, onCharacterClicked} = this.props
        return (
            <div className="row">
                {
                    characters.map((character, innerIdx) =>
                        (
                            <Character onCharacterClicked={onCharacterClicked} row={index} key={innerIdx} character={character} col={innerIdx} />
                        )
                    )
                }
            </div>
        )
    }
}


export default CharacterRow;