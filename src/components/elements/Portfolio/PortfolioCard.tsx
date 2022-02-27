import { Box, Badge } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@chakra-ui/icons';
import cgd from '../../../../public/coffeeGrindDatabase.png';
import { useTheme, useColorMode } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import styles from './Portfolio.module.css';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  project: {
    imageAlt: string;
    title: string;
  };
  setBlockScroll: Dispatch<SetStateAction<boolean>>;
};

export default function PortfolioCard({ project, setBlockScroll }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  function handleBlockScroll(boolean: boolean) {
    console.log('blocking');
    setBlockScroll(boolean);
  }

  return (
    <Box
      className={styles.projectCard}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <a
        target="_blank"
        href="https://coffeegrinddatabase.herokuapp.com/"
        rel="noreferrer"
      >
        <Image src={cgd} alt={project.imageAlt} height="400px" />
      </a>
      <Box className={styles.projectText}>
        <Box
          p="3"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {project.title}
        </Box>
        <p
          className={styles.proejectDescription}
          onPointerEnter={() => handleBlockScroll(true)}
          onPointerLeave={() => handleBlockScroll(false)}
        >
          A full stack app for coffee enthusiasts to share espresso/filter
          coffee recipes. I created this app as a Christmas projects after 6
          weeks at School of Code using Vanilla HTML, CSS and JS for the front
          end and an Express back end. The app is deployed on Heroku using a
          PostgreSQL database to store recipes.
          <br />
          <br />I am currently in the process of rewriting this app using NextJS
          and TypeScript.
        </p>
      </Box>
      <Box display="flex" mt="2" alignItems="center">
        <SocialIcon
          style={{ height: 40, width: 40 }}
          className={styles.link}
          url="https://github.com/firko-learnin/CGD"
          target="_blank"
          fgColor={theme.colors.brand.white}
        ></SocialIcon>
      </Box>
    </Box>
  );
}
