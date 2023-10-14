import snowman from '../assets/images/snowman.webp'
import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { ThemeContext } from '../context/ThemeContext'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const { theme } = useContext(ThemeContext)
  const notify = (message: string) => toast.success(message)

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      email: { value: string }
      message: { value: string }
    }
    const payload = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    }
    fetch('https://amplifyapp-1a7df-default-rtdb.firebaseio.com/contact.json', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      notify(`Successful`)
      target.name.value = ''
      target.email.value = ''
      target.message.value = ''
    })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      <div className="justify-center md:flex md:items-center">
        <img className="max-w-[400px] rounded-xl" src={snowman}></img>
      </div>
      <div className="pt-3 md:w-1/2">
        <h2 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
          Contact
        </h2>
        <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          If you're in search of a Frontend Engineer who not only possesses
          technical expertise but also prioritizes attention to detail and
          stability. Let's Connect!
        </p>
        <form onSubmit={submit}>
          <div className="flex justify-between gap-4">
            <input
              required
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              className="mb-4 w-1/2 rounded-lg bg-gray-200 p-4 opacity-50"
            />
            <input
              required
              name="email"
              id="email"
              type="text"
              placeholder="Email"
              className="mb-4 w-1/2 rounded-lg bg-gray-200 p-4 opacity-50"
            />
          </div>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            placeholder="Message"
            className="mb-4 w-full rounded-lg bg-gray-200 p-4 opacity-50"
          ></textarea>
          <button className="w-full rounded-lg bg-black px-6 py-2 text-base text-white duration-200 hover:opacity-75 dark:bg-white dark:text-black md:text-sm xl:text-base">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}
