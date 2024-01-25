// src/index.ts
import { format, differenceInDays } from "date-fns";

// Configuração do fuso horário para Pernambuco (Recife)
const timeZone = "America/Recife";

// Data atual
const currentDate = new Date();

// Data do Reveillon de 2025 (01/Jan/2025)
const reveillonDate = new Date(2025, 0, 1);

// Calcula a diferença em dias
const difBetweenDates = differenceInDays(reveillonDate, currentDate);

// Formata a diferença em dias
console.log(
  `Faltam ${difBetweenDates} dias até o Reveillon de ${format(
    reveillonDate,
    "dd.MM.yyyy"
  )}`
);
