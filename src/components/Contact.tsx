import { useState, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import { ThemeContext } from '../context/ThemeContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-toastify/dist/ReactToastify.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import snowman from '../assets/images/snowman.webp'

export default function Contact() {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const notify = useCallback((message: string, type: 'success' | 'error') => {
    if (type === 'success') {
      toast.success(message)
    } else {
      toast.error(message)
    }
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    },
    [],
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      fetch(
        'https://amplifyapp-1a7df-default-rtdb.firebaseio.com/contact.json',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then(() => {
          notify(t('success'), 'success')
          setFormData({ name: '', email: '', message: '' })
        })
        .catch(() => {
          notify(t('error'), 'error')
        })
    },
    [formData, notify, t],
  )

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
        <LazyLoadImage
          className="max-w-[400px] rounded-xl"
          src={snowman}
          alt="snowman"
          effect="opacity"
          width={400}
          height={535}
        />
      </div>
      <div className="pt-3 md:w-1/2">
        <h2 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
          {t('contact')}
        </h2>
        <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          {t('contact-description')}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            <input
              required
              name="name"
              id="name"
              type="text"
              placeholder={t('name')}
              value={formData.name}
              onChange={handleChange}
              className="mb-4 w-1/2 rounded-lg bg-gray-200 p-4 opacity-50"
            />
            <input
              required
              name="email"
              id="email"
              type="email"
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
              className="mb-4 w-1/2 rounded-lg bg-gray-200 p-4 opacity-50"
            />
          </div>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            placeholder={t('message')}
            value={formData.message}
            onChange={handleChange}
            className="mb-4 w-full rounded-lg bg-gray-200 p-4 opacity-50"
          ></textarea>
          <button className="w-full rounded-lg bg-black px-6 py-2 text-base text-white duration-200 hover:opacity-75 dark:bg-white dark:text-black md:text-sm xl:text-base">
            {t('send')}
          </button>
        </form>
      </div>
    </>
  )
}
