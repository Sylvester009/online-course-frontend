"use client";

import React, { useState } from "react";
import { X } from "lucide-react"; // Icon library
import './uiStyles/sheet.css'; // Importing the external CSS

export const Sheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="sheet-trigger">
        Menu
      </button>

      {isOpen && (
        <div className="sheet-overlay">
          <div className="sheet-content">
            <button onClick={() => setIsOpen(false)} className="sheet-close">
              <X className="sheet-close-icon" />
              <span className="sr-only">Close</span>
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// Export individual components if needed
export const SheetContent = Sheet;
export const SheetTrigger = Sheet;
export const SheetClose = Sheet;


