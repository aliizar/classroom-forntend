export interface Subject {
  id: string;
  courseCode: string;
  name: string;
  department: string;
  description: string;
}

export const mockSubjects: Subject[] = [
  {
    id: "1",
    courseCode: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Fundamentals of programming, algorithms, and computer systems.",
  },
  {
    id: "2",
    courseCode: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Integral calculus, series, and multivariable functions.",
  },
  {
    id: "3",
    courseCode: "ENG150",
    name: "English Literature",
    department: "English",
    description:
      "Survey of English literature from the Renaissance to modern times.",
  },
  {
    id: "4",
    courseCode: "BIO110",
    name: "General Biology",
    department: "Biology",
    description: "Introduction to cellular biology, genetics, and ecology.",
  },
  {
    id: "5",
    courseCode: "HIST300",
    name: "World History",
    department: "History",
    description:
      "Comprehensive overview of global events from ancient to contemporary periods.",
  },
];
