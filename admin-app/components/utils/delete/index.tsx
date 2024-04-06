import { useEvent } from "@/context";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export const DeleteDialog = ({ label, event, title }: any) => {
  const { deleteEvent } = useEvent();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>Delete</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2">{label}</AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              болих
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              onClick={() => {
                deleteEvent(event._id);
              }}
              variant="solid"
              color="red"
            >
              устгах
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
