import { Text } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <Text small>
            next <Text>xkcd</Text>
          </Text>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/"></Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
