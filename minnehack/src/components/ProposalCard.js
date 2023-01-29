import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProposalCard({
  id,
  causeTitle,
  description,
  imageURL,
  buttonText,
  urlPart,
}) {
  const href = urlPart + id;
  console.log(href);
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      className="m-9"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageURL}
        alt="Cause image"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{causeTitle}</Heading>
          <Text py="2">{description}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            <a href={href}>{buttonText}</a>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default ProposalCard;
