import { Center, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Table from './components/table/Table';
import Welcome from './pages/welcome/Welcome';
import Landing from './pages/landing/Landing';
import './App.scss';


function App() {
  return (
	<div className="App">
        <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/landing' element={<Landing/>} />
            <Route path='/table' element={<Table/>} />

        </Routes>
	</div>
  );
}

export default App;
