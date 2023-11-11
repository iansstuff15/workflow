import Image from 'next/image';
import AppIconWithText from '@/assets/icon-with-text.svg';
import { CircularProgress } from '@nextui-org/progress';
export default function Home() {
  return (
    <div className="h-screen">
      <Image
        src={AppIconWithText}
        className="m-auto "
        width={450}
        height={450}
        alt="workflow icon with text"
      />
      <CircularProgress size="lg" label="workflow loading please wait..." />
    </div>
  );
}
