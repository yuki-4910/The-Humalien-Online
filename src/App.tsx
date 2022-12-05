import { Center, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Table from './components/table/Table';
import Welcome from './pages/welcome/Welcome';
import Landing from './pages/landing/Landing';
import JoinGame from './pages/join_game/JoinGame';
import CreateGame from './pages/create_game/CreateGame';
import './App.scss';


function App() {
  return (
	<div className="App">
        <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/landing' element={<Landing/>} />
            <Route path='/join' element={<JoinGame/>} />
            <Route path='/create' element={<CreateGame/>} />
            <Route path='/table' element={<Table/>} />

        </Routes>
	</div>
  );
}

export default App;
