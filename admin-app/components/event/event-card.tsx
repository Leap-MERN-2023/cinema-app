import React from "react";
import { Box, Button, Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import { momentChange } from "../utils/moment";
import { DeleteDialog } from "../utils";
import { useEvent } from "..";
import { EventEdit } from "./edit/edit-dialog";

type Props = {
  event: any;
};

export const EventCard = ({ event }: Props) => {
  const { deleteEvent } = useEvent();
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
        <Flex align={"center"} direction={"row"} justify={"between"}>
          <Text>{momentChange(event.date)}</Text>
          <EventEdit event={event} />
        </Flex>
      </Card>
    </Box>
  );
};
