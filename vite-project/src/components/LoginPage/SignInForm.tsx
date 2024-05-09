import './SignInForm.css'
import { z } from "zod"


const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(7).max(50),
})

const SignInForm = () => {
  return (
    <div>

    </div>
  )
}

export default SignInForm

