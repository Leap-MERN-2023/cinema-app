import React from "react";
import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes";

type Props = {
  movie: any;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <Box maxWidth="240px">
      <Card size="2">
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
        <Text as="p" size="3">
          <Strong>{movie.title}</Strong>
        </Text>
        <Text>{movie.director}</Text>
      </Card>
    </Box>
  );
};
