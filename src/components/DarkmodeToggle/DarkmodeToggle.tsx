import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import styles from './DarkmodeToggle.module.css';
import StickyHeader from '../../hooks/StickyHeader';

export default function DarkmodeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { tableRef, isSticky } = StickyHeader();
  const colors = {
    light: 'white',
    dark: 'black'
  };
  return (
    <div id={styles.navbar}>
      <IconButton
        ref={tableRef}
        id={styles.button}
        aria-label="Toggle dark mode"
        icon={
          colorMode === 'dark' ? <SunIcon></SunIcon> : <MoonIcon></MoonIcon>
        }
        onClick={function () {
          toggleColorMode();
        }}
        color={colors}
      ></IconButton>
    </div>
  );
}
