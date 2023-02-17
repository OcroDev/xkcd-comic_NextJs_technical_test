import Link from 'next/link';
import { useRef, useState } from 'react';
import axios from 'axios';

export function Header() {
  const searchRef = useRef();
  const [results, setResults] = useState([]);

  const handleChange = () => {
    const q = searchRef.current.value;
    console.log(q);

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
          <li className='relative'>
            <input ref={searchRef} type='search' onChange={handleChange} />
            {Boolean(results.length > 0) && (
              <div className='absolute top-0 left-0'>
                <ul>
                  {results.map((result) => {
                    return (
                      <li key={result.id}>
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
          </li>
        </ul>
      </nav>
    </header>
  );
}
