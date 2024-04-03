import { ReactNode } from 'react';
import Link from 'next/link';

interface MenuItemProps {
  item: {
    title: string;
    path: string;
    icon: ReactNode;
  };
}

const MenuItem = ({ item }: MenuItemProps) => (
  <li className="group">
    <Link href={item.path}>
      <span className="flex gap-3 w-full items-center text-white rounded-md p-2 group-hover:bg-blue-500 group-hover:text-white transition duration-200 ease-in-out transform group-hover:scale-105">
        {item.icon}
        <span>{item.title}</span>
      </span>
    </Link>
  </li>
);

interface MenuSectionProps {
  section: {
    title: string;
    list: MenuItemProps['item'][];
  };
}

export const MenuSection = ({ section }: MenuSectionProps) => (
  <li>
    <h3 className="text-gray-500 px-10 text-sm uppercase tracking-wide font-semibold">
      {section.title}
    </h3>
    <ul className="flex flex-col gap-2 md:my-5 relative left-12 w-48">
      {section.list.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </ul>
  </li>
);
