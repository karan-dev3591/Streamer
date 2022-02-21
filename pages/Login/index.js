import {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle, faApple, faAmazon, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Googleauth from '../../components/Google-auth'


function login () {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const pressShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }
    const myfunc = (event) => {
        event.preventDefault();
        if(username==="karan"&&password==="123"){
        router.push('/')
        }else {
            alert("incorrect username or password")
        }
    }

    return (
        
        <div className="h-screen flex flex-col justify-center items-center ">
             <Image className='my-5'
                src="/s.png"
                alt='Streamer'
                width={250}
                height={200}
                />
            <div className=" text-White mb-3 border-non border-b-gray-800 w-80 pt-8 pb-4 flex flex-col
            items-center">
                <div className='mb-8 font-serif text-3xl '>
                    Login
                </div>
             
                {/* <h1 className='font-serif text-6xl text-[#3DBB3D]'>HULU</h1> */}
         <form className=" w-64 flex flex-col gap-1 mt-2 mb-2 ">
             
                <div>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                 className="peer w-full rounded border bg-gray-100 text-black p-2 text-xs" placeholder="Username" required = {true}/>
                </div>

               
                 <div>
                   <input type={showPassword ? "text" : "password"} name='Password' value={password} onChange={(e) => setPassword(e.target.value)}
                   className="w-full rounded border bg-gray-100  text-black p-2 text-xs" placeholder="Password" required = {true}/>

                  <button onClick = {(e) =>pressShow(e)} className="absolute right-2 bottom-2 focus:text-gray-500 rounded text-sm font-semibold">
                      {showPassword ? 'Hide' : 'Show'}</button>
                 </div>
                 <a className='mt-3 mb-6 text-sm text-center bg-[#3DBB3D] text-black py-1  rounded font-medium
                 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 cursor-pointer font-bold'
                 onClick={(e) => myfunc(e)}>Log In</a>
                 <div>
                   <div>
                       <p className='flex  justify-center font-bold  text-center' >
                           OR
                       </p>
                   </div>
               
                 </div>
                 <a href='https://vercel.com/new?onboarding=true' className='mt-3 mb-1  text-sm text-center  py-1  font-medium cursor-pointer'>
                 <Googleauth className='text-sm mx-2'/>
                 
                 </a>
                
            </form>
         </div>
            {/* <div className= " text-White ">
                 Get it on 
                 <a href='https://play.google.com/store/apps/details?id=com.hulu.plus&hl=en_IN&gl=US' className='mt-1 mb-2  text-sm text-center font-bold  text-white py-1 hover:text-[#228B22]  font-medium cursor-pointer'>
                 <FontAwesomeIcon  icon={faGooglePlay} className=' text-sm mx-2'></FontAwesomeIcon> 
                 GooglePlay
                 </a>
            </div> */}
            <Link href="Form">
              <div className='mt-2 no-underline hover:underline cursor-pointer'>
                  If You don't have an account SignUp
              </div>
              </Link>
        </div>
    )
}

export default login 