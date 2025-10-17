export const ThemeScript = () => {
  const setInitialTheme = `
    (function() {
      function getInitialTheme() {
        const storedTheme = window.localStorage.getItem('theme');
        if (typeof storedTheme === 'string') {
          return storedTheme;
        }

        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
        if (systemPreference.matches) {
          return 'dark';
        }

        return 'light';
      }

      const theme = getInitialTheme();
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />;
};
