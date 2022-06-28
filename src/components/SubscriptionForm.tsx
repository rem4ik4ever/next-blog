import axios from 'axios'
import { FormEvent, useState } from "react"

export const SubscriptionForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const submit = async (ev: FormEvent) => {
    try {
      ev.preventDefault();
      const result = await axios.post('/api/subscribe', {
        email
      })
      console.log({result})
      setSubmitted(true)
    } catch (error) {
      console.error(error) 
    }
  }
  if(submitted){
    return (
      <div className="p-4 w-full my-3 flex rounded-md flex-col">
        <h2 className="text-xl text-center">Thanks for Subscribing! ✅</h2>  
      </div>
    )
  }
  return (
    <div className="p-4 w-full my-3 flex rounded-md flex-col max-w-xl">
      <h2 className="text-xl mb-3">Stay up to date</h2>
      <form className="flex gap-2" onSubmit={submit}>
        <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="Email" className="rounded-md p-2 border w-full text-black" required />
        <button className="border rounded-md px-4 py-2 bg-blue-500 text-white">Subscribe</button>
      </form>
    </div>
  )
}
