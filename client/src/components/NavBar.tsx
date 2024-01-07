
const NavBar = () => {
  return (
    <div className="bg-gray-700 col-span-1 row-start-1 row-span-12 xl:text-xl">
      <ul className="ml-3 mt-10 flex flex-col gap-8  py-5">
        <li className="w-fit bg-gray-400 py-1 px-8  hover:bg-blue-500 text-white rounded"><a href="http://google.com">User</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">Map</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">Statistics</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">Info</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">Google</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">Facebook</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">Instagram</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">LinkedIn</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">GitHub</a></li>
        <li className="w-fit bg-green-500 py-1 px-5 hover:bg-blue-500 text-white rounded"><a href="http://google.com">Gitlab</a></li>
      </ul>
    </div>
  )
}

export default NavBar
