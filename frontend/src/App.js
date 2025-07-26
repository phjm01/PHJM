import React from 'react';
import './App.css';
import { Header, ProductsGrid, CompanyDescription, FeaturedCategories } from './components';

function App() {
  return (
    <div className="App" dir="rtl">
      {/* Header */}
      <Header />
      
      {/* Main Products Grid */}
      <main className="min-h-screen bg-gray-100">
        <ProductsGrid />
        
        {/* Company Description */}
        <CompanyDescription />
        
        {/* Featured Categories */}
        <FeaturedCategories />
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <svg className="w-8 h-8 mr-2 text-pink-500" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 2L24 8V24L16 30L8 24V8L16 2Z" />
            </svg>
            <h3 className="text-xl font-bold">شركة دار النجران</h3>
          </div>
          <p className="text-gray-300 mb-4">
            شركة رائدة في تجارة القرطاسية بالجملة في العراق
          </p>
          <p className="text-gray-300 text-sm">
            © 2025 شركة دار النجران. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;