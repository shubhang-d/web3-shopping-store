export default function Card({ prod }) { 
    return (
       <div key={prod.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-white p-8 flex items-center justify-center">
                  <img 
                    src={prod.image} 
                    alt={prod.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
                    {prod.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    ${prod.price} USD
                  </p>
                  <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-medium">
                    View Details
                  </button>
                </div>
              </div>
    )
}