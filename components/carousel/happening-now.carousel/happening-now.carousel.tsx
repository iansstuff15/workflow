import HappeningNowCard from '@/components/cards/happening-now/happening-now.cards';
import AppCarousel from '../carousel.component';

const HappeningNowCarousel = () => {
  return (
    <AppCarousel
      childrenArray={[
        <HappeningNowCard
          key={1}
          title="Sit ipsum incididunt eu "
          subtitle="ipsum incididunt"
          description="Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla."
        />,
        <HappeningNowCard
          key={1}
          title="Sit ipsum incididunt eu "
          subtitle="ipsum incididunt"
          description="Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla."
        />,
        <HappeningNowCard
          key={1}
          title="Sit ipsum incididunt eu "
          subtitle="ipsum incididunt"
          description="Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla."
        />,
        <HappeningNowCard
          key={1}
          title="Sit ipsum incididunt eu "
          subtitle="ipsum incididunt"
          description="Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla."
        />,
      ]}
    />
  );
};

export default HappeningNowCarousel;
