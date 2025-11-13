import Search from './search'
export default function Header({ searchTxt, setSearchTxt }) {
    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"  />
            </svg>
            <h1 className="text-2xl font-bold">Web3 Shopping Cart</h1>
          </div>
          <Search searchTxt={searchTxt} setSearchTxt={setSearchTxt}></Search>
        </div>
      </nav>
    )
}