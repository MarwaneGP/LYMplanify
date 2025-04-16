
import { AppProvider } from '@/providers/app';
import AppContainer from '../components/AppContainer';
import Home from './views/home/index';


export default function App() {

  return (
    <AppProvider>
      <AppContainer childElement={<Home />}>
      </AppContainer>
    </AppProvider>
  );
} 