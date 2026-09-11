import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-16 text-foreground">
      <Container>
        <h1 className="text-4xl font-bold">
          Sunny Family Band
        </h1>

        <p className="mt-4 text-lg">
          Good music. Great company.
        </p>
      </Container>
    </main>
  );
}