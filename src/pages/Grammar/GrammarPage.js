import GrammarGuide from './GrammarGuide'
import GrammarList from './GrammarList'
import { Guides } from './guides/guides';
import { useState } from 'react';
import './Grammar.css'

export default function GrammarPage(){
    const data = Guides;
    const [guide, setGuide] = useState({});

    const getGuideFromList = (guide) => {
        setGuide(guide);
    }


    return (
        <>
            <div className='grammar-page'>
                <GrammarList  getGuideFromList={getGuideFromList} data={data}/>
                <GrammarGuide data={guide}/>
            </div>

        </>
    )
}