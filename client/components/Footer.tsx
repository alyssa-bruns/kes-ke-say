import { Link } from 'react-router-dom'
import DateTimeDisplay from './DateTimeDisplay'
import News from './News'
function Footer() {
  return (
    <>
      <footer className="mt-auto bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="/images/icons/icon-darkgray.png"
              className="mr-5 h-6 sm:h-9 inline-block"
              alt="logo"
            />
            <p className="max-w-xs text-sm text-gray-600 mb-7 inline-block">
              Social media by Jean-Pierre.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 justify-center">
            <div className="grid grid-cols-1 gap-8 lg:col-span-3 sm:grid-cols-3 lg:grid-cols-3 text-center">
              <div>
                <p className="font-xl">Ze French News</p>
                <p className="mt-4 text-sm underline text-blue-900">
                  <Link to="/news">Click to View Latest News</Link>
                </p>
              </div>
              <div>
                <p className="font-xl">Weather</p>
              </div>
              <div>
                <DateTimeDisplay />
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-800 text-center">
            © Tohorā 2024 | Kes-Ke-Say Limited
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
