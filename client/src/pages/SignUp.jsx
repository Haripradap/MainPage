import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"


const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>


      {/* left */}
        <div className="flex-1">
            <Link to='/' className='  sm:text-xl font-bold dark:text-white text-4xl'>
                <span  className='px-2 py-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg text-white'>
                SRMS
               </span>
            </Link>
          <p className="text-sm mt-5">
          You can signup with your Email or with Your google account
          </p>
        </div> 


        {/* right */}
        <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your Username"></Label>
                <TextInput type="text" placeholder="Username" id="username"/>
              </div>
              <div>
                <Label value="Your Email"></Label>
                <TextInput type="text" placeholder="User@email.com" id="email"/>
              </div>
              <div>
                <Label value="Password"></Label>
                <TextInput type="text" placeholder="Password" id="password"/>
              </div>
              <Button gradientDuoTone='pinkToOrange' type='submit'>
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-4">
              <span>Have an account?</span>
              <Link to='/sign-in' className="text-blue-500">
                Sign In
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp