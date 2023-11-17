'use client';
import { sidebarItemProps } from '@/data/interface/sidebar-item/siderbaritem.interface';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { usePathname } from 'next/navigation';
const SideBarItem = ({ child, label, to, icon }: sidebarItemProps) => {
  const path = usePathname();
  if (child?.length! > 0) {
    return (
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem
          value="item-1"
          className=" border-none hover:border-none "
        >
          <AccordionTrigger>{label}</AccordionTrigger>
          {child?.map((data, index) => {
            return <AccordionContent key={index}>{data}</AccordionContent>;
          })}
        </AccordionItem>
      </Accordion>
    );
  } else {
    return (
      <Link
        href={to ?? ''}
        className={`hover:bg-slate-100 rounded-md flex px-4 py-2 text-sm ${
          path == to
            ? 'text-white font-bold bg-gradient-to-r from-sky-600 from-10% via-blue-600 via-30%  to-sky-600 to-90%'
            : null
        }`}
      >
        {icon}
        <span className="pl-2">{label}</span>
      </Link>
    );
  }
};

export default SideBarItem;
