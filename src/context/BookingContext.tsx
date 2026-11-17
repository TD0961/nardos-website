"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isOpen: boolean;
  selectedProperty: string;
  openBooking: (propertyTitle?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const openBooking = (propertyTitle?: string) => {
    setSelectedProperty(propertyTitle || "");
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedProperty("");
  };

  return (
    <BookingContext.Provider
      value={{ isOpen, selectedProperty, openBooking, closeBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

