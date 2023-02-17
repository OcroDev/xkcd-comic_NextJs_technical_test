import { Container, Text } from "@nextui-org/react";
import Link from "next/link";

export function Header() {
  return (
    <header className='flex justify-between item-center p-4 max-w-xl m-auto'>
      <h1>
        <Link href='/' className='font-bold transition hover:opacity-70 '>
          next <span className='font-light'>xkcd</span>
        </Link>
      </h1>
      <nav>
        <ul className='flex flex-row gap-2 '>
          <li>
            <Link href='/' className='text-sm font-semibold'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/search' className='text-sm font-semibold'>
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
