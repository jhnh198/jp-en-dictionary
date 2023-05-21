import './Content.css'

export default function Home(){
    return (
        <div className="content-page-container">
            <div className='content-main-container'>
                <h1 className="content-header">Home</h1>
                <p className='content-body'>Welcome to Owl And Sakura, A Japanese and English Language Website.</p>
                <br/>
                <p>The goal of this site is to help English speakers learn Japanese in a more intutive way. In my own experience I have found there are some key points of Japanese that should be focused on to help English learners understand Japanese. Learning another language should be more immersive and focus on how to think in another language rather than relying on one's native language for reference. </p>
                <br/>
                <p>The sooner one can embrace the target language, the better. To do this, the differences should be emphasized.</p>
                <br/>
                <p>There is a dictionary, lessons, grammar guides as well as mini-games the user can interact with.</p>
                <br/>
                <p>Chat and Blogs, Stories and Articles will be added later. In the future I hope to add additional languages as well.</p>
            </div>

            <div className='image-container'>
            <img className="content-image" src={require('kibunenight.jpg')} alt="street at night in Kibune, Japan"></img>
            </div>
        </div>

    )
}
