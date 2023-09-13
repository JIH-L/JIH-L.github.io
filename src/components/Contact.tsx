export default function Contact() {
  return (
    <>
      <div className="w-1/2 justify-center md:flex md:items-center">
        <img
          className="rounded-xl"
          src={'https://picsum.photos/400/500.webp?grayscale'}
        ></img>
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
        <div className="flex justify-between gap-4">
          <input
            type="text"
            placeholder="Name"
            className="mb-4 w-1/2 rounded-lg bg-gray-200 p-4 opacity-50"
          />
          <input
            type="text"
            placeholder="Email"
            className="mb-4 w-1/2 rounded-lg bg-gray-200 p-4 opacity-50"
          />
        </div>
        <textarea
          rows={5}
          placeholder="Message"
          className="mb-4 w-full rounded-lg bg-gray-200 p-4 opacity-50"
        ></textarea>
        <button className="w-full rounded-lg bg-black px-6 py-2 text-base text-white duration-200 hover:opacity-75 dark:bg-white dark:text-black md:text-sm xl:text-base">
          Send Message
        </button>
      </div>
    </>
  )
}
