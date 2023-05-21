import './Grammar.css'

export default function GrammarGuide({data}){
    return (
        <>
            <div className='grammar-guide'> 
                <h1 className='grammar-guide-header'>{data.title}</h1>

                <p className='grammar-guide-body'>
                    {data.body}             
                </p>
            </div>
        </>
    )
}