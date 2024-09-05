import profilePicture from './assets/profile.jpg'

function Card(){
    return(
        <div className="border border-black rounded-md shadow-md shadow-gray-500 p-[10px] m-[10px] text-center inline-block max-w-64">
            <div className='flex justify-center'>
                <img src={profilePicture} alt="Profile Picture" className='w-[150px] h-[150px] object-cover rounded-full mb-5'/>
            </div>
            <h2 className='font-bold text-xl'>James</h2>
            <p className='font-semibold text-lg'>My first time trying react</p>
        </div>
    )
}

export default Card