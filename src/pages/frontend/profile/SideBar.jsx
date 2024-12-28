import "react";
function SideBar() {
  return (
    <div className="w-1/4 bg-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="flex items-center p-6 bg-blue-500">
        <span className="text-white text-xl font-bold">Settings</span>
      </div>

      <nav className="flex-1 p-6">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-500"
            >
              <i className="fas fa-user"></i>
              <span className="font-medium">Profil</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-500"
            >
              <i className="fas fa-calendar-alt"></i>
              <span className="font-medium">Kegiatan</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-500"
            >
              <i className="fas fa-trophy"></i>
              <span className="font-medium">Lomba</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-500"
            >
              <i className="fas fa-cog"></i>
              <span className="font-medium">Account</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-500"
            >
              <i className="fas fa-bell"></i>
              <span className="font-medium">Notification</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default SideBar;
