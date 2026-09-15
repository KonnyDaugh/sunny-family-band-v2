"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type BookingContextValue = {
  selectedProgram: string;
  selectProgram: (programId: string) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export default function BookingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedProgram, setSelectedProgram] = useState("");

  return (
    <BookingContext.Provider
      value={{
        selectedProgram,
        selectProgram: setSelectedProgram,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (context === null) {
    throw new Error("useBooking must be used inside BookingProvider");
  }

  return context;
}