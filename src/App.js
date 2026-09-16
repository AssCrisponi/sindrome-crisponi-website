import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ResearchPage from './pages/ResearchPage';
import SindromePage from './pages/SindromePage';
import ChiSiamoPage from './pages/ChiSiamoPage';
import AssociazionePage from './pages/AssociazionePage';
import AssociazioneIntro from './pages/associazione/AssociazioneIntro';
import StatutoPage from './pages/associazione/StatutoPage';
import EventiPage from './pages/associazione/EventiPage';
import { LanguageProvider } from './i18n/LanguageContext';

const App = () => {

  return (
    <div>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sindrome" element={<SindromePage />} />
          <Route path="/ricerca" element={<ResearchPage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/associazione" element={<AssociazionePage />}>
            <Route index element={<AssociazioneIntro />} />
            <Route path="statuto" element={<StatutoPage />} />
            <Route path="eventi" element={<EventiPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    </div>
  );
};

export default App;