"use client";
import React from "react";
import { Box, Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";

import { TrailerDialog } from "./trailer-dailog";
import { EditDialog } from "./edit/edit-dialog";

type Props = {
  movie: any;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <Box maxWidth="240px">
      <Card size="2" className="relative">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={movie.poster.vertical}
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 350,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"2"}
        >
          <Text as="p" size="3">
            <Strong>{movie.title}</Strong>
          </Text>

          <Text>{movie.director}</Text>
          <TrailerDialog movie={movie} />
          <EditDialog movie={movie} />
        </Flex>
      </Card>
    </Box>
  );
};
