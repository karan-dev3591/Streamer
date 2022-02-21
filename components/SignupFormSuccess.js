import Image from 'next/image'

function SignupFormSuccess () {
  return (
    
<div className="flex items-center justify-center h-screen bg-black">
 
  <div className="container">
    <div className="bg-black rounded-lg shadow-lg p-5 md:p-20 mx-2">
    <div className=" image">
  <Image className="object-contain "
       src="/s.png" 
       width={200}
       height={100}
       />
  </div>
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-red-600  sm:text-5xl sm:leading-none md:text-6xl">
          Streamer<span className="text-white">!</span>
        </h2>
        <h3 className='text-xl md:text-3xl text-white font-bold mt-10'>Thank you for creating Account</h3>
        <p className="text-md md:text-xl text-white font-bold mt-10"> If you want to look your account please click the button below ! </p>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
        
        <div className="m-3">
          <a href="/" title="hulu home page"
             className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span className="mx-auto">View</span>
          </a>
        </div>
      </div>  
    </div>
  </div>
</div>
  )
}

export default SignupFormSuccess