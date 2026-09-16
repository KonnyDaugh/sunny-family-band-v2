import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">
            Sunny Family Band
          </p>

          <p>
            Split, Croatia · © {currentYear}
          </p>
        </div>
      </Container>
    </footer>
  );
}