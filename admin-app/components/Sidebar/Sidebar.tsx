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
  Settings,
  Table2Icon,
  HomeIcon,
  LampIcon,
  MonitorPlay,
  Clapperboard,
  FileVideo2,
  Film,
  CalendarCheck,
} from "lucide-react";
import { useSidebar } from "./use-sidebar";
import { cn } from "@/app/libs/utlis";
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
          <div
            style={{
              fontSize: 24,
              background: "red",
              fontFamily: "600",
              width: "40px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              borderRadius: "50%",
            }}
          >
            C
          </div>
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
                  name="Нүүр хуудас"
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
                  name="Кинонууд"
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
                  title="Кино театр"
                  href="/cinema"
                  icon={<Film className="h-6 w-6" />}
                ></LinkItem>
              </li>
              <li>
                <LinkItem
                  title="Үзвэрийн хуваарь"
                  href="/showtime"
                  icon={<Film className="h-6 w-6" />}
                ></LinkItem>
              </li>
              <li>
                <LinkItem
                  title="Үйл ажиллагаа"
                  href="/events"
                  icon={<CalendarCheck className="h-6 w-6" />}
                ></LinkItem>
              </li>

              <li>
                <LinkItem
                  title="Хэрэглэгчид"
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
                  name="Профайл"
                  icon={<User2Icon className="  h-6 w-6 hover:text-white" />}
                >
                  <LinkItem
                    title="Профайл"
                    href="/profile"
                    icon={<User2Icon className="h-6 w-6" />}
                  ></LinkItem>
                  <LinkItem
                    title="Тохиргоо"
                    href="/settings"
                    icon={<Settings className="h-6 w-6" />}
                  ></LinkItem>
                </ExpandMenu>
              </li>
              <li>
                <LinkItem
                  title="Нэвтрэх"
                  href="/signin"
                  icon={<LockIcon className="h-5 w-5" />}
                ></LinkItem>
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
