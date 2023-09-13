export default function Loading() {
  return (
    <div className="z-50 flex h-screen items-center justify-center bg-gray-200 dark:bg-neutral-800">
      <div className="h-[30px] w-[30px] animate-spin rounded-[100%] border-2 border-solid border-black border-t-transparent dark:border-white dark:border-t-neutral-800"></div>
    </div>
  )
}
