import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  MenuIcon,
  ShoppingBag,
  User2Icon,
  LockIcon,
  BarChart2,
  Component,
  Settings,
  Table2Icon,
  HomeIcon,
  LampIcon,
  SignalHigh,
  AlertCircle,
  MousePointerClick,
  MonitorPlay,
  Clapperboard,
  FileVideo2,
} from "lucide-react";
import { useSidebar } from "./use-sidebar";
import { cn } from "@/app/libs/utlis";
import MenuItem from "./MenuItem";
import LinkItem from "./LinkItem";
import ExpandMenu from "./ExpandMenu";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        `absolute left-0 top-0 z-9999 flex h-screen w-20 flex-col overflow-y-hidden bg-black duration-300 ease-linear  dark:bg-boxdark lg:static lg:translate-x-0 `,
        {
          "w-70": isSidebarOpen,
        }
      )}
    >
      <div className="relative flex w-full items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link className="flex items-center" href="/">
          <Image
            className="h-6 w-6 rounded-md"
            width={400}
            height={400}
            src={"/images/logo/logo-icon.png"}
            alt="Logo"
          />
          {isSidebarOpen && (
            <h1 className=" ml-2 text-xl font-semibold text-white">
              Cinema-Admin
            </h1>
          )}
        </Link>
        {isSidebarOpen && (
          <MenuIcon onClick={toggleSidebar} className="h-6 w-6" />
        )}
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="px-4 py-4  lg:px-6">
          <div>
            <ul
              className={cn("mb-6 flex flex-col  gap-1.5", {
                "items-center justify-center": !isSidebarOpen,
              })}
            >
              <li>
                <ExpandMenu
                  name="Homepage"
                  icon={<HomeIcon className="  h-6 w-6 hover:text-white" />}
                >
                  <LinkItem
                    icon={<ShoppingBag />}
                    title="E-commerce"
                    href="/"
                  />
                </ExpandMenu>
              </li>
              <li>
                <ExpandMenu
                  name="Movies"
                  icon={<MonitorPlay className="  h-6 w-6 hover:text-white" />}
                >
                  <LinkItem
                    title="Now showing"
                    href="/movies"
                    icon={<Clapperboard className="h-6 w-6" />}
                  ></LinkItem>
                  <LinkItem
                    title="Comingsoon"
                    href="/comingsoon"
                    icon={<FileVideo2 className="h-6 w-6" />}
                  ></LinkItem>
                </ExpandMenu>
              </li>

              <li>
                <LinkItem
                  title="Tables"
                  href="/tables"
                  icon={<Table2Icon className="h-6 w-6" />}
                ></LinkItem>
              </li>
              <li>
                <LinkItem
                  title="Charts"
                  href="/chart"
                  icon={<BarChart2 className="h-6 w-6" />}
                ></LinkItem>
              </li>
              <li>
                <ExpandMenu
                  name="Profile"
                  icon={<User2Icon className="  h-6 w-6 hover:text-white" />}
                >
                  <LinkItem
                    title="Profile"
                    href="/profile"
                    icon={<User2Icon className="h-6 w-6" />}
                  ></LinkItem>
                  <LinkItem
                    title="Settings"
                    href="/settings"
                    icon={<Settings className="h-6 w-6" />}
                  ></LinkItem>
                </ExpandMenu>
              </li>
              <li>
                <ExpandMenu name="Auth" icon={<LampIcon className="h-6 w-6" />}>
                  <LinkItem
                    title="Sign In"
                    href="/auth/signin"
                    icon={<LockIcon className="h-5 w-5" />}
                  ></LinkItem>
                </ExpandMenu>
              </li>

              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
