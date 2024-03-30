export default function footer() {
    return (

    

<footer className="bg-zinc-900 dark:bg-gray-900 ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-2 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src="https://play-lh.googleusercontent.com/mlZR_qzNaeAu7-iztAuHC89dUQ92f2QBkT3Fv2PpPa7XDZyo1SAYFYX9xAdw-2rkFkiK" className="h-12 me-3 rounded-full" alt="Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">Grohostin</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">GroHostin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline ">LinkedIn</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">FaceBook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">GroHostin</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

    )
}