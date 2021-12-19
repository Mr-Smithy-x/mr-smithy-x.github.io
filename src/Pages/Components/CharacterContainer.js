import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import CharacterRow from "./CharacterRow";

export class CharacterContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {selected: null}
    }

    componentDidMount() {

    }

    onCharacterClicked(e, row, col) {
        const {speech, characters} = this.props
        let character = characters[row][col]
        if (speech.hasBrowserSupport()) { // returns a boolean
            speech.speak({
                text: character,
            }).then(() => {
                console.log("Success !")
            }).catch(e => {
                console.error("An error occurred :", e)
            })
        }
        this.setState({selected: character})
    }

    render() {
        const {characters, title, dictionary} = this.props
        const {selected} = this.state
        return (
            <div className="row container">
                <p className="container row">{title}</p>

                <div className="container row corners">
                    <div className="col-md-3 justify-content-center">
                        <span className="high"><span className="char">{selected ?? '?'}</span>:</span>
                    </div>
                    <div className="col-md-9 justify-content-center">
                        <span className="high">{dictionary[selected] ?? "Hover over"}</span>
                    </div>
                </div>
                <div className="container-fluid row corners">
                    {
                        characters.map((character_row, idx) =>
                            (
                                <CharacterRow
                                    key={idx}
                                    characters={character_row} index={idx}
                                    onCharacterClicked={
                                        (e, row, col) => this.onCharacterClicked(e, row, col)
                                    }/>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default CharacterContainer;