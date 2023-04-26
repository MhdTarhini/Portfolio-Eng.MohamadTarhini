import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CvCard = ({ title, description, imageSrc, url }) => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    console.log(id);
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Card
      onClick={handleClick(url)}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      cursor="pointer"
      style={{ width: 600, height: 150 }}>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageSrc}
        alt={title}
      />
      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text color="#64748b" fontSize="lg">
            {description}
          </Text>
        </CardBody>
        <CardFooter>
          <p spacing={2} alignitems="center">
            see more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </p>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CvCard;
