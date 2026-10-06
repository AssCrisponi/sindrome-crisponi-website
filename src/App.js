import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ResearchPage from './pages/ResearchPage';
import SindromePage from './pages/SindromePage';
import SindromeIntro from './pages/sindrome/SindromeIntro';
import DiagnosiGestionePage from './pages/sindrome/DiagnosiGestionePage';
import ScuolaPage from './pages/sindrome/ScuolaPage';
import LavoroPage from './pages/sindrome/LavoroPage';
import CentriRiferimentoPage from './pages/sindrome/CentriRiferimentoPage';
import ScopertaSindromePage from './pages/sindrome/ScopertaSindromePage';
import GiangiorgioCrisponiPage from './pages/sindrome/GiangiorgioCrisponiPage';
import LauraCrisponiPage from './pages/sindrome/LauraCrisponiPage';
import GiuseppeZampinoPage from './pages/sindrome/GiuseppeZampinoPage';
import ContattiPage from './pages/ContattiPage';
import BlogsPage from './pages/BlogsPage';
import BlogsIntro from './pages/blogs/BlogsIntro';
import StefaniaPage from './pages/blogs/StefaniaPage';
import DiarioFarfaGraziaPage from './pages/blogs/DiarioFarfaGraziaPage';
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
            <Route path="la-scoperta-della-sindrome" element={<ScopertaSindromePage />} />
            <Route path="giangiorgio-crisponi" element={<GiangiorgioCrisponiPage />} />
            <Route path="laura-crisponi" element={<LauraCrisponiPage />} />
            <Route path="giuseppe-zampino" element={<GiuseppeZampinoPage />} />
            <Route path="diagnosi-e-gestione" element={<DiagnosiGestionePage />} />
            <Route path="scuola" element={<ScuolaPage />} />
            <Route path="lavoro" element={<LavoroPage />} />
            <Route path="centri-riferimento-contatti" element={<CentriRiferimentoPage />} />
          </Route>
          <Route path="/ricerca" element={<ResearchPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/blogs" element={<BlogsPage />}>
            <Route index element={<BlogsIntro />} />
            <Route path="stefania" element={<StefaniaPage />} />
            <Route path="diario-di-farfagrazia" element={<DiarioFarfaGraziaPage />} />
          </Route>
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