export default function Navigation() {
  const navItems = [
    "New",
    "Sarees",
    "Lehengas",
    "Salwar Kameez",
    "Kurtis",
    "Jewellery",
    "Men",
    "Kids",
    "Modest",
    { name: "Luxe", isNew: true },
    "Home & Living",
    { name: "Fusion", isNew: true },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3  ">
      <div className="max-w-7xl mx-auto">
        <ul className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium text-sm flex items-center">
                {typeof item === "string" ? item : item.name}
                {typeof item === "object" && item.isNew && (
                  <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">New</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
