import { Container, Text } from "@nextui-org/react";
import Link from "next/link";

export function Header() {
  return (
    <>
      <Container as="header" responsive display="flex" justify="space-between">
        <div>
          <Text small>
            next <Text>xkcd</Text>
          </Text>
        </div>
        <nav>
          <Container
            as="ul"
            display="flex"
            direction="row"
            // justify="space-around"
            style={{ listStyle: "none" }}
            responsive
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
          </Container>
        </nav>
      </Container>
    </>
  );
}
