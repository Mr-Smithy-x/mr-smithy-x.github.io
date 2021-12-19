import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './../index.css'

export class Hiragana extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        let hiragana = [
            ['あ', 'い', 'う', 'え', 'お'],
            ['か', 'き', 'く', 'け', 'こ'],
            ['さ', 'し', 'す', 'せ', 'そ'],
            ['た', 'ち', 'つ', 'て', 'と'],
            ['な', 'に', 'ぬ', 'ね', 'の'],
            ['ま', 'み', 'む', 'め', 'も'],
            ['や', '　', 'ゆ', '　', 'よ'],
            ['ら', 'り', 'る', 'れ', 'ろ'],
            ['わ', '　', '　', '　', 'を'],
            ['ん', '　', '　', '　', '　']
        ]


        return (
            <div className="row">
                <div className="container-fluid">
                    {hiragana.map((character_row, idx) => (
                            <div className="row">
                                { character_row.map((character, innerIdx) => (<span className="col-2 jap text-end">{character}</span>)) }
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default Hiragana;