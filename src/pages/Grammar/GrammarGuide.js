export default function GrammarGuide({data}){
    return (
        <>
            <h1>{data.title}</h1>

            <p>
                {data.body}             
            </p>
        </>
    )
}