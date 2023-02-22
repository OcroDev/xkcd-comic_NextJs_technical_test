import Link from 'next/link';
import { useRef, useState } from 'react';

export function Header() {
  const searchRef = useRef();
  const [results, setResults] = useState([]);

  const getValue = () => searchRef.current?.value;

  const handleChange = () => {
    const q = getValue();
    if (q === '') {
      setResults([]);
      return;
    }
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
            <div className='relative  '>
              {Boolean(results.length) && (
                <div className='absolute top-0 left-0 bg-white opacity-90 rounded-xl'>
                  <ul>
                    <li
                      key={'all-results'}
                      className='block text-ellipsis whitespace-nowrap overflow-hidden hover:bg-sky-200 hover:rounded-lg p-3 text-gray-400'
                    >
                      <Link
                        href={`/search?q=${getValue()}`}
                        className='text-sm font-semibold'
                      >
                        ver {results.length} resultados
                      </Link>
                    </li>
                    {results.map((result) => {
                      return (
                        <li
                          key={result.id}
                          className='block text-ellipsis whitespace-nowrap overflow-hidden hover:bg-sky-200 hover:rounded-lg p-3'
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
