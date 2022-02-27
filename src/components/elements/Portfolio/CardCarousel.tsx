import { Image } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PortfolioCard from './PortfolioCard';

type Props = {
  projects: {
    imageAlt: string;
    title: string;
  }[];
  setBlockScroll: Dispatch<SetStateAction<boolean>>;
};

const CardCarousel = ({ projects, setBlockScroll }: Props) => {
  return (
    <Carousel infiniteLoop width="90vw" showThumbs={false}>
      {projects.map((project, index: number) => {
        return (
          <PortfolioCard
            project={project}
            key={index}
            setBlockScroll={setBlockScroll}
          ></PortfolioCard>
        );
      })}
    </Carousel>
  );
};

export default CardCarousel;
