import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ResearchPage from './pages/ResearchPage';
import SindromePage from './pages/SindromePage';
import SindromeIntro from './pages/sindrome/SindromeIntro';
import DiagnosiGestionePage from './pages/sindrome/DiagnosiGestionePage';
import ScuolaPage from './pages/sindrome/ScuolaPage';
import CentriRiferimentoPage from './pages/sindrome/CentriRiferimentoPage';
import ChiSiamoPage from './pages/ChiSiamoPage';
import AssociazionePage from './pages/AssociazionePage';
import AssociazioneIntro from './pages/associazione/AssociazioneIntro';
import StatutoPage from './pages/associazione/StatutoPage';
import EventiPage from './pages/associazione/EventiPage';
import StampaPage from './pages/associazione/StampaPage';
import ProgettiPage from './pages/associazione/ProgettiPage';
import AltrePubblicazioniPage from './pages/associazione/AltrePubblicazioniPage';
import ImmaginiPage from './pages/associazione/ImmaginiPage';
import { LanguageProvider } from './i18n/LanguageContext';

const App = () => {

  return (
    <div>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sindrome" element={<SindromePage />}>
            <Route index element={<SindromeIntro />} />
            <Route path="diagnosi-e-gestione" element={<DiagnosiGestionePage />} />
            <Route path="scuola" element={<ScuolaPage />} />
            <Route path="centri-riferimento-contatti" element={<CentriRiferimentoPage />} />
          </Route>
          <Route path="/ricerca" element={<ResearchPage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/associazione" element={<AssociazionePage />}>
            <Route index element={<AssociazioneIntro />} />
            <Route path="statuto" element={<StatutoPage />} />
            <Route path="eventi" element={<EventiPage />} />
            <Route path="stampa" element={<StampaPage />} />
            <Route path="progetti" element={<ProgettiPage />} />
            <Route path="altre-pubblicazioni" element={<AltrePubblicazioniPage />} />
            <Route path="immagini" element={<ImmaginiPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    </div>
  );
};

export default App;