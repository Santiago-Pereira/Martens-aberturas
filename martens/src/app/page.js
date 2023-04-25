"use client";
import { NavBar } from "../components/NavBar";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg">
        <NavBar />
      </Container>
    </main>
  );
}
