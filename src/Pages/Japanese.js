import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import CharacterRow from "./Components/CharacterContainer";
import Speech from 'speak-tts'
import CharacterContainer from "./Components/CharacterContainer"; // es6

export class Japanese extends Component {


    constructor(props) {
        super(props);
        this.state = {
            speech: new Speech(),
            hiragana: [
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
            ],
            katakana: [
                ['ア', 'イ', 'ウ', 'エ', 'オ'],
                ['カ', 'キ', 'ク', 'ケ', 'コ'],
                ['サ', 'シ', 'ス', 'セ', 'ソ'],
                ['タ', 'チ', 'ツ', 'テ', 'ト'],
                ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
                ['マ', 'ミ', 'ム', 'メ', 'モ'],
                ['ヤ', '　', 'ユ', '　', 'ヨ'],
                ['ラ', 'リ', 'ル', 'レ', 'ロ'],
                ['ワ', '　', '　', '　', 'ヲ'],
                ['ン', '　', '　', '　', '　']
            ],
            hiragana_dict: {
                'あ': 'a, (ah) ',
                'い': 'i, (ie)',
                'う': 'u, (ouh)',
                'え': 'e, (eh)',
                'お': 'o, (oh)',
                'か': 'ka (kah)',
                'き': 'ki (key)',
                'く': 'ku (coo)',
                'け': 'ke (kay)',
                'こ': 'ko (co)',
                'さ': 'sa (sah)',
                'し': 'shi (she)',
                'す': 'su (sue)',
                'せ': 'se (say)',
                'そ': 'so (so)',
                'た': 'ta (tah)',
                'ち': 'chi (chee)',
                'つ': 'tsu (zue)',
                'て': 'te (teh)',
                'と': 'to (tow)',
                'な': 'na (nah)',
                'に': 'ni (knee)',
                'ぬ': 'nu (nuu)',
                'ね': 'ne (neh)',
                'の': 'no (no)',
                'ま': 'ma (ma)',
                'み': 'mi (me)',
                'む': 'mu (moo)',
                'め': 'me (meh)',
                'も': 'mo (mo)',
                'や': 'ya (yah)',
                'ゆ': 'yu (you)',
                'よ': 'yo (yo)',
                'ら': 'ra (rah)',
                'り': 'ri (rii)',
                'る': 'ru (ruu)',
                'れ': 're (rey)',
                'ろ': 'ro (ro)',
                'わ': 'wa (wah)',
                'を': 'wo (oh)',
                'ん': 'n (nn)',
                '　': '',
            },
            katakana_dict: {
                'ア': 'a, (ah) ',             
                'イ': 'i, (ie)',              
                'ウ': 'u, (ouh)',             
                'エ': 'e, (eh)',              
                'オ': 'o, (oh)',              
                'カ': 'ka (kah)',             
                'キ': 'ki (key)',             
                'ク': 'ku (coo)',             
                'ケ': 'ke (kay)',             
                'コ': 'ko (co)',              
                'サ': 'sa (sah)',             
                'シ': 'shi (she)',            
                'ス': 'su (sue)',             
                'セ': 'se (say)',             
                'ソ': 'so (so)',              
                'タ': 'ta (tah)',             
                'チ': 'chi (chee)',           
                'ツ': 'tsu (zue)',
                'テ': 'te (teh)',             
                'ト': 'to (tow)',             
                'ナ': 'na (nah)',             
                'ニ': 'ni (knee)',            
                'ヌ': 'nu (nuu)',             
                'ネ': 'ne (neh)',             
                'ノ': 'no (no)',              
                'マ': 'ma (ma)',              
                'ミ': 'mi (me)',              
                'ム': 'mu (moo)',             
                'メ': 'me (meh)',             
                'モ': 'mo (mo)',              
                'ヤ': 'ya (yah)',             
                'ユ': 'yu (you)',             
                'ヨ': 'yo (yo)',              
                'ラ': 'ra (rah)',             
                'リ': 'ri (rii)',             
                'ル': 'ru (ruu)',             
                'レ': 're (rey)',             
                'ロ': 'ro (ro)',              
                'ワ': 'wa (wah)',             
                'ヲ': 'wo (oh)',
                'ン': 'n (nn)',               
                '　': '',                     
            }
        };

    }

    componentDidMount() {
        const {speech} = this.state
        speech.init({
            'volume': 1,
            'lang': 'ja-JP',
            'rate': 1,
            'pitch': 1,
            'voice': 'Kyoko',
            'splitSentences': true,
            'listeners': {
                'onvoiceschanged': (voices) => {
                    console.log("Event voiceschanged", voices)
                }
            }
        }).then((data) => {
            // The "data" object contains the list of available voices and the voice synthesis params
            console.log("Speech is ready, voices are available", data)
        }).catch(e => {
            console.error("An error occured while initializing : ", e)
        })
        this.setState({speech: speech})
    }


    render() {
        const {hiragana, katakana, hiragana_dict, katakana_dict, speech} = this.state
        return (
            <div className="row">
                <div className="col-md-6 container-fluid">
                    <CharacterContainer title="Hiragana" characters={hiragana} speech={speech}
                                        dictionary={hiragana_dict}/>
                </div>
                <div className="col-md-6 container-fluid">
                    <CharacterContainer title="Katakana" characters={katakana} speech={speech}
                                        dictionary={katakana_dict}/>
                </div>
            </div>
        );
    }
}

export default Japanese;