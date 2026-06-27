import type { FC, PropsWithChildren } from "react";
import PlusIcon from "../../assets/PlusIcon";
import { Container, IconContainer } from "./styles";

interface Props {
  // Called when the user clicks the button to add a new column.
  onClick: () => void;

  // Used to adjust the label before any columns exist.
  isFirst: boolean;
}

const AddColumnButton: FC<PropsWithChildren<Props>> = ({
  onClick,
  isFirst,
}) => {
  return (
    <Container onClick={onClick}>
      <IconContainer>
        <PlusIcon />
      </IconContainer>

      <span>{isFirst ? "Add a list" : "Add another list"}</span>
    </Container>
  );
};

export default AddColumnButton;
