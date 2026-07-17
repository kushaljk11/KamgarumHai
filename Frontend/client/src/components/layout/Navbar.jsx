
export default function Navbar() {
    return (
        <>
            <nav className="navbar flex justify-between items-center text-black p-4 px-16">
                <div className="logo">
                    <h1 className="text-2xl font-semibold">TaskMaster</h1>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-black text-lg font-semibold hover:text-green-400">Home</a></li>
                        <li><a href="/about" className="text-black text-lg font-semibold hover:text-green-400">About</a></li>
                        <li><a href="/contact" className="text-black text-lg font-semibold hover:text-green-400">Contact</a></li>
                    </ul>
                </div>
                <div className="flex space-x-2">
                    <button className="border border-green-800 text-green-800 font-bold py-2 px-4 rounded cursor-pointer hover:bg-green-800 hover:text-white">Login</button>
                    <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Register</button>
                </div>
            </nav>
        </>
    )
}
