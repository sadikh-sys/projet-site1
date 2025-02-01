// src/App.tsx
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DailySpecial } from './components/DailySpecial';
import { Menu } from './components/Menu';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';

function App() {
  const isAdmin = true; // Changez cette valeur pour gérer l'accès administrateur

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow">
        <DailySpecial />
        <Menu />
        <OrderForm />
        {isAdmin && <AdminPanel />}
      </main>
      <Footer />
    </div>
  );
}

export default App;