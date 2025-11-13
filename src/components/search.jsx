export default function Search({ searchTxt, setSearchTxt }) {
  return (
    <div className="relative">
      <input 
        type="text"
        placeholder="Search products..."
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <svg className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
}