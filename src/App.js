import {useEffect, useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SkeletonCard from './components/SkeletonCard';
import GlobalContextProvider from './context/GlobalContext';
import HeaderContextProvider from './context/HeaderContext';
import {GlobalStyles} from './globalStyles';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GlobalContextProvider>
      <GlobalStyles />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      {loading && <SkeletonCard />}
      {!loading && <Main />}
      <Footer />
    </GlobalContextProvider>
  );
};

export default App;
