import React from "react";
import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes";

type Props = {
  event: any;
};

export const EventCard = ({ event }: Props) => {
  return (
    <Box maxWidth="240px">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={event.image}
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
          <Strong>{event.name}</Strong>
        </Text>
        <Text>{event.date.split("T")[0]}</Text>
      </Card>
    </Box>
  );
};
