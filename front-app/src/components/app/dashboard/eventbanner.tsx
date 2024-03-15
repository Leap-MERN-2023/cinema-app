import { Button } from "@/components";
import { ProfileDrawer } from "@/components/profileDrawer";
import React from "react";

const EventsBanner = () => {
  return (
    <div className="max-w-[1000px] h-screen max-h-[20rem] mx-auto my-10 py-12 px-20 relative overflow-hidden rounded-lg block z-10 bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:opacity-90 before:z-[-5]">
      <div className="flex flex-col h-full gap-10 justify-end">
        <div className=" text-white text-4xl">
          The Adventures of Robin Hood (1938)
        </div>
        <div className=" flex justify-between items-end pt-10">
          <p className="text-white text-xs w-[70%]">
            Arguably Flynn's greatest role, this is the classic, swashbuckling,
            adventure, costume epic/spectacle about the infamous rebel outlaw
            and his band of merry men from Sherwood Forest who "robbed from the
            rich and gave to the poor." The charming Robin Hood (Flynn) fights
            for justice against the evil Sir Guy of Gisbourne (Rathbone), the
            villainous Sheriff of Nottingham (Cooper), and the scheming Prince
            John (Rains),
          </p>
          <Button className="text-white bg-red-500">Дэлгэрэнгүй</Button>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
