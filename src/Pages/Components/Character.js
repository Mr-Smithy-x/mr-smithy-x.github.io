import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

/**
 *
 * Japanese	                    3040 - 309f
 * Katakana	                    30a0 - 30ff
 * Kanji (common & uncommon)	4e00 - 9faf
 * Kanji (rare)	                3400 - 4dbf
 */
export class Character extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    some(str, callback) {
        return Array.prototype.some.call(str, callback);
    }

    hasKanji(str) {
        return this.some(str, this.isKanji);
    }

    isKanji(ch) {
        return (ch >= "\u4e00" && ch <= "\u9faf") ||
            (ch >= "\u3400" && ch <= "\u4dbf");
    }


    render() {
        const {character, row, col, onCharacterClicked} = this.props
        return (
            <div
                className="container col-2 justify-content-center"
                 onMouseEnter={(e) => onCharacterClicked(e, row, col)}
                 onClick={(e) => onCharacterClicked(e, row, col)}>
                <span className="jap character">{character}</span>
            </div>
        )
    }
}

export default Character;