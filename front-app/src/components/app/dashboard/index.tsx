"use client";
import React, { useContext, useEffect } from "react";

import FilterSection from "./filterSection";
import EventsBanner from "./eventbanner";
import { AuthContext, CarouselCard, useAuth } from "@/components";
import { MovieCard } from "@/components";
import { MovieContext } from "@/components";
import myAxios from "../../utils/axios";
import { useParams, useSearchParams } from "next/navigation";

type Props = {};

export const Dashboard = (props: Props) => {
  const { setUser } = useAuth();
  const success = useSearchParams().get("login");

  const getCurrentUser = async () => {
    try {
      const {
        data: { user },
      } = await myAxios.get("/user/current_user", { withCredentials: true });
      console.log("UUUUSSSEEERRR ", user);
      setUser(user);
    } catch (error: any) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, [success]);

  return (
    <div>
      <CarouselCard />
      <div className="container mx-auto">
        <FilterSection />
        <MovieCard />
      </div>
      <EventsBanner />
    </div>
  );
};
