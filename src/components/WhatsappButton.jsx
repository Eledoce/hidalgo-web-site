export default function WhatsappButton() {
  return (
    <a
      href={
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
          ? 'whatsapp://send?phone=527351280629'
          : 'https://api.whatsapp.com/send?phone=527351280629'
      }
      className="flex justify-center items-center text-white text-4xl p-3 bg-[#25D366] hover:bg-white-100 rounded-full shadow duration-150 ease-in-out h-14 w-14 right-5 fixed bottom-20 z-50 hover:shadow-xl active:scale-90 transition-transform"
      aria-label="whatsapp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-whatsapp"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    </a>
  )
}
