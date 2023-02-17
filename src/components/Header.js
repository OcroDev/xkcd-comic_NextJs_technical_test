import Link from 'next/link';
import { useRef, useState } from 'react';

export function Header() {
  const searchRef = useRef();
  const [results, setResults] = useState([]);

  const handleChange = () => {
    const q = searchRef.current.value;

    fetch(`/api/search?q=${q}`)
      .then((res) => res.json())
      .then((searchResults) => {
        setResults(searchResults);
      });
  };

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
            <input
              ref={searchRef}
              type='search'
              onChange={() => handleChange()}
              className='px-4 py-1 text-xs border border-gray-400 rounded-3xl'
            />
            <div className='relative'>
              {results !== null && (
                <div className='absolute top-0 left-0'>
                  <ul>
                    {results.map((result) => {
                      return (
                        <li
                          key={result.id}
                          className='hover:bg-sky-100 hover:opacity-70'
                        >
                          <Link
                            href={`/comic/${result.id}`}
                            className='text-sm font-semibold'
                          >
                            {result.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
