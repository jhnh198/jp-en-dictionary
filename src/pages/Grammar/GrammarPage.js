import GrammarGuide from './GrammarGuide'
import GrammarList from './GrammarList'
import { Guides } from './guides/guides';
import { useState } from 'react';

export default function GrammarPage(){
    const data = Guides;
    const [guide, setGuide] = useState({});

    const getGuideFromList = (guide) => {
        setGuide(guide);
    }


    return (
        <>
            <h1>Grammar Guides</h1>
            <GrammarList  getGuideFromList={getGuideFromList} data={data}/>
            <GrammarGuide data={guide}/>
        </>
    )
}