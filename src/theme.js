import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      // Use Galano for a modern and versatile look
      fontFamily: '"Galano", sans-serif', // Primary font for body text
      h1: {
        fontFamily: '"Galano", sans-serif', // Galano for large headings
        fontWeight: 700, // Adjust weight as needed
      },
      h2: {
        fontFamily: '"Galano", sans-serif', // Consistency in headings
        fontWeight: 700,
      },
      h3: {
        fontFamily: '"Galano", sans-serif', // Consistent with other headings
        fontWeight: 700,
      },
      h4: {
        fontFamily: '"Galano", sans-serif', // Consistent for smaller headings
        fontWeight: 700,
      },
      // Continue customizing for other variants as needed
    },
});

export default theme;
