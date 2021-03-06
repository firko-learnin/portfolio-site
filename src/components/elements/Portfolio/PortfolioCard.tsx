import { Box, useDisclosure, Button } from '@chakra-ui/react';
import Image from 'next/image';
import {
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Image as ChakraImage
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import styles from './Portfolio.module.css';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  project: {
    imageAlt: string;
    title: string;
    description: string;
    githubUrl: string;
    deployUrl: string;
    image: StaticImageData;
  };
  setBlockScroll?: Dispatch<SetStateAction<boolean>>;
};

type Description = {
  description: string;
  title: string;
};

function ModalText({ description, title }: Description) {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {description.length > 175 ? (
        <Button className={styles.modalButton} onClick={onOpen}>
          Read more
        </Button>
      ) : null}

      <Modal isOpen={isOpen} onClose={onClose} isCentered colorScheme="brand">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">{description}</ModalBody>

          <ModalFooter style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              bgColor={theme.colors.brand.yellow}
              color={theme.colors.brand.onyx}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function ModalImage({ project }: Props) {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className={styles.imageContainer} onClick={onOpen}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          // height="400px"
          // width="600px"
          layout="fill"
          objectFit="fill"
        />
      </Box>

      <Modal
        size="4xl"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        colorScheme="brand"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{ display: 'flex' }}>
            <Box className={styles.modalImageContainer} onClick={onOpen}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                height="500px"
                width="750px"
                layout="responsive"
              />
            </Box>
          </ModalBody>

          <ModalFooter style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              bgColor={theme.colors.brand.yellow}
              color={theme.colors.brand.onyx}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function PortfolioCard({ project, setBlockScroll }: Props) {
  const theme = useTheme();

  function handleBlockScroll(boolean: boolean) {
    console.log('blocking');
    setBlockScroll!(boolean);
  }

  return (
    <Box
      className={styles.projectCard}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onPointerEnter={() => handleBlockScroll(true)}
      onPointerLeave={() => handleBlockScroll(false)}
    >
      {/* <Box className={styles.imageContainer}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          // height="400px"
          // width="600px"
          layout="fill"
          objectFit="fill"
        />
      </Box> */}
      <ModalImage project={project}></ModalImage>
      <Box className={styles.projectText}>
        <Box
          p="3"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          className={styles.title}
        >
          <a
            className={styles.projectUrl}
            target="_blank"
            href={project.deployUrl}
            rel="noreferrer"
          >
            {project.title}
          </a>
          <SocialIcon
            style={{ height: 40, width: 40 }}
            className={styles.link}
            url={project.githubUrl}
            target="_blank"
            fgColor={theme.colors.brand.white}
          ></SocialIcon>
        </Box>
        <Text className={styles.projectDescription}>{project.description}</Text>
        <Box
          display="flex"
          mt="2"
          mb="10"
          alignItems="center"
          justifyContent="center"
        >
          <ModalText
            description={project.description}
            title={project.title}
          ></ModalText>
        </Box>
      </Box>
    </Box>
  );
}
