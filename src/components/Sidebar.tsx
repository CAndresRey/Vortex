import { Link } from "react-router-dom";
import cn from "classnames";

interface SidebarProps {
  Icon: React.ElementType;
  text: string;
  route: string;
  active: boolean;
  height?: string;
  onClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  Icon,
  text,
  route,
  active,
  height = "50px",
  onClick,
}) => {
  return (
    <Link
      className={cn(
        `flex p-3 items-center gap-2 font-medium text-light border-b border-borders`,
        {
          "bg-accent border-r-transparent": active,
          "bg-ligth": !active,
        }
      )}
      to={route}
      onClick={onClick}
      style={{ height }}
    >
      <Icon className="w-4 h-4" />
      {text}
    </Link>
  );
};

export default Sidebar;
