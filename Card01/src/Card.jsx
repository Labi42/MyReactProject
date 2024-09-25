import annapic from './assets/Untitled (3).jpg'

function Card(){
    return (
        <div className="card">
            <img className='card-image' src={annapic} alt="Anna Image" />
            <h2 className='card-title'>Anna</h2>
            <p className='card-text'>Student</p>
        </div>
    )
}

export default Card