'use client';
import BadgeWrapper from '@/components/badge-wrapper/badge-wrapper.components';
import AppButton from '@/components/button/appButtons';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { happeningNowProps } from '@/data/interface/card/happening-now';

const HappeningNowCard = ({
  title,
  description,
  subtitle,
  linkToNavigate,
  image,
}: happeningNowProps) => {
  return (
    <BadgeWrapper>
      <Card className="w-72 h-56 overflow-hidden">
        <CardHeader>
          <CardTitle>
            <h1 className="text-sm">{title}</h1>
          </CardTitle>
          {subtitle ? (
            <CardDescription className="text-xs">{subtitle}</CardDescription>
          ) : null}
        </CardHeader>
        <CardContent>
          <Card className="p-4 space-y-2">
            <p className="text-xs line-clamp-3">{description}</p>
            <Badge className="cursor-pointer">Continue Reading</Badge>
          </Card>
        </CardContent>
      </Card>
    </BadgeWrapper>
  );
};

export default HappeningNowCard;
