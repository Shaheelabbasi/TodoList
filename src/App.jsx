import { useCallback, useState } from 'react';
import FAQ from './Components/FAQ';
import MyAcordian from './Components/MyAcordian';
import { FaChevronDown } from "react-icons/fa";
import Test from './Components/Test';
// import Button from './Components/Button';
import Input from './Components/Input';
import Login from './Components/Login';
import Todo from './Components/Todo';

import { AuthProvider } from './Context/Auth';
import { ThemeProvider } from './Context/Theme';
import Theme from './Components/Theme';
function App() {
  return (
    <>
      <AuthProvider>
        <Login />
        {/* You can add other components like FAQ, Todo, etc., here */}
      </AuthProvider>

      <ThemeProvider>
      <Theme/>
      </ThemeProvider>



    </>
  );
}

export default App;
