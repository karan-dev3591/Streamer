
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {useState , useEffect} from 'react'
import validation from './validation';


 
function SignupForm ({submitForm}) {
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [isError, setIsError] = useState('');

    // const checkValidation=(e) => {
    //     setConfirmPassword(e.target.value)
    //     if(password != confirmPassword){
    //     setIsError("password is not matching")
    //     }else{
    //         setIsError("")
    //     }
    // }
    
   
   
    const [values, setValues] = useState({
        fullname : "",
        email:"",
        password:"",
        confirmpassword:"",
        
    });
 
    const[errors, setErrors] = useState({})
    const [dataIsCorrect , setDataIsCorrect] = useState(false)
    
    const handleChange =(event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const Click =(event) => {
        event.preventDefault()
        setErrors(validation(values));
        setDataIsCorrect(true)
     
    }
    
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    },[errors]);
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
             <div className='my-5 px-5 mb-10'>
             <p className='font-bold'><span className='text-red-600'>Streamer</span> have exclusive patnership with ... </p>
             <Image 
                src="/disney.png"
                alt='hulu'
                width={600}
                height={350}
                />
                
                
               <p className="font-bold">Stream full seasons of exclusive series, current-season episodes, hit movies, Disney Originals, kids</p> 
               <p className="font-bold"> shows, and more.</p>
             </div>
    <div className="px-8 py-6 mx-4 mt-4 text-left bg-black shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center text-white">Join us</h3>
        <form action="">
            <div className="mt-4">
                <div>
                    <label className="block" for="Name">Full Name</label>
                            <input type="text" placeholder="Name" name='fullname' value={values.fullname}
                               onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 text-black focus:ring-blue-600"/>
                                {errors.fullname && <p className='error text-red-500'>{errors.fullname}</p>}
                </div>
                <div className="mt-4">
                    <label className="block" for="email">Email</label>
                            <input type="Email" placeholder="Email" name='email' value={values.email} 
                               onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 text-black focus:ring-blue-600"/>
                              {errors.email && <p className='error text-red-500'>{errors.email}</p>}
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" placeholder="Password" name='password' value={values.password}
                              onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 text-black focus:ring-blue-600"/>
                                {errors.password && <p className='error text-red-500'>{errors.password}</p>}
                </div>
                <div className="mt-4">
                    <label classNameName="block">Confirm Password</label>
                            <input type="password" placeholder="Password" name='confirmpassword' value={values.confirmpassword}
                             onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 text-black focus:ring-blue-600"/>
                                {errors.confirmpassword && <p className='error text-red-500'>{errors.confirmpassword}</p>}
                </div>
               
                {/* <span className="text-xs text-red-400">Password must be same!</span> */}
               
                <div className="flex">
                    
                    <button onClick={(e) => Click(e)} className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                        Account</button>
                </div>
               
        
                <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link href = "Login">
                    <a className="text-blue-600 hover:underline" href="#">
                        Log in
                    </a>
                    </Link>
                </div>
            </div>
        </form>
    </div>
</div>
    )
}


export default SignupForm