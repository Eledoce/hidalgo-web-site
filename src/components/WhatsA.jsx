export default function WhatsA({ children, className }) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=527351280629"
      className={`hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out ${className}`}
      aria-label="whatsapp"
    >
      {children}
    </a>
  )
}
