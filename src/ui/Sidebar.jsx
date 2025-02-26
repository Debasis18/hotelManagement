import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Uploader from "@/data/Uploader";
import { User, Settings, Calendar, Home, Hotel } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  const navItems = [
    { label: "Home", icon: Home },
    { label: "Booking", icon: Calendar },
    { label: "Cabins", icon: Hotel},
    { label: "Users", icon: User },
    { label: "Settings", icon: Settings },
  ];

  return (
    <div className="bg-white text-gray-800 w-60 h-screen py-6 flex flex-col border-r">
      <h1 className="text-2xl font-bold mb-6 text-center">Library</h1>
      <Separator className="mb-4" />
      <nav className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex items-center gap-3 justify-start px-4 py-2 "
          >
            <item.icon className="w-5 h-5" />
            <Link to={"/cabins"}>
              <span>{item.label}</span>
            </Link>
          </Button>
        ))}
      </nav>
      <Uploader/>
    </div>
  );
}

export default Sidebar;
