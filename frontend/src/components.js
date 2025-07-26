import React, { useState, useEffect } from 'react';

// Header Component with Animations
export const Header = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`bg-white border-b border-gray-200 py-4 transition-all duration-700 transform ${
      headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo with Animation */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-pink-600 flex items-center transition-all duration-300 hover:scale-105 cursor-pointer">
            <svg 
              className="w-8 h-8 mr-2 transition-transform duration-300 hover:rotate-12" 
              viewBox="0 0 32 32" 
              fill="currentColor"
            >
              <path d="M16 2L24 8V24L16 30L8 24V8L16 2Z" />
            </svg>
            <span className="animate-fade-in-right">شركة دار النجران</span>
          </div>
        </div>

        {/* Search Bar with Enhanced Animation */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="بحث..."
              className={`w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg text-right transition-all duration-300 ${
                searchFocused 
                  ? 'scale-105 shadow-lg border-pink-500 bg-pink-50' 
                  : 'hover:shadow-md'
              } focus:outline-none focus:ring-2 focus:ring-pink-500`}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <button className="absolute left-0 top-0 h-full px-4 text-white bg-pink-600 rounded-l-lg hover:bg-pink-700 transition-all duration-300 hover:scale-105 active:scale-95">
              <svg 
                className="w-5 h-5 transition-transform duration-300 hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Menu with Staggered Animation */}
        <nav className="flex items-center space-x-6 text-sm">
          <a 
            href="#" 
            className="text-gray-700 hover:text-pink-600 flex items-center transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
            style={{ animationDelay: '200ms' }}
          >
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="animate-fade-in-left">تسجيل الدخول</span>
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-pink-600 flex items-center transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
            style={{ animationDelay: '400ms' }}
          >
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 hover:bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5L3 1m4 12a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="animate-fade-in-left">عربة التسوق</span>
          </a>
          <button 
            className="text-gray-700 hover:text-pink-600 flex items-center transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
            style={{ animationDelay: '600ms' }}
          >
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
            <span className="animate-fade-in-left">العربية</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

// Product Category Card Component with Enhanced Animations
export const CategoryCard = ({ image, title, arabicTitle, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-500 transform hover:shadow-2xl ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110 rotate-1' : 'scale-100'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>
      <div className={`bg-blue-900 text-white p-3 text-center transition-all duration-300 ${
        isHovered ? 'bg-blue-800 shadow-lg' : 'bg-blue-900'
      }`}>
        <h3 className={`font-semibold text-sm transition-transform duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}>{arabicTitle}</h3>
      </div>
    </div>
  );
};

// Company Description Section with Text Animation
export const CompanyDescription = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('company-description');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slideText = [
    "Daralnajran is a leading stationery wholesale company in Iraq, offering a wide range of products from notebooks to art supplies. With a commitment to quality and customer satisfaction, they serve schools, businesses, and individual customers, making stationery accessible for everyone.",
    "دار النجران هي شركة رائدة في تجارة القرطاسية بالجملة في العراق، تقدم مجموعة واسعة من المنتجات من دفاتر الملاحظات إلى مستلزمات الفن.",
    "We pride ourselves on delivering high-quality office supplies and educational materials to meet all your business and academic needs.",
    "خدماتنا تشمل المدارس والشركات والعملاء الأفراد، مما يجعل القرطاسية في متناول الجميع."
  ];

  return (
    <div id="company-description" className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center relative">
          <div className="relative h-32 flex items-center justify-center">
            {slideText.map((text, index) => (
              <h2 
                key={index}
                className={`absolute inset-0 flex items-center justify-center text-4xl font-bold text-red-500 leading-relaxed transition-all duration-1000 transform ${
                  currentSlide === index 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-y-8 scale-95'
                      : 'opacity-0 translate-y-8 scale-95'
                } ${isVisible ? 'animate-fade-in' : ''}`}
              >
                {text}
              </h2>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <div 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                    currentSlide === index 
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Products Grid Component with Staggered Animation
export const ProductsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Staples",
      arabicTitle: "دبابيس جافيلين"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Photo Frames",
      arabicTitle: "إطارات صور"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1628621317388-6ebde0c18574?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Repair Stationery",
      arabicTitle: "قرطبة إصلاح"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Gel Pens",
      arabicTitle: "قلم جف"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "CD & DVD Discs",
      arabicTitle: "قرص سيدي و دي في دي"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1631173716529-fd1696a807b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "Cardboard Paper",
      arabicTitle: "ورق مقوى"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1510070009289-b5bc34383727?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "Colors & Paints",
      arabicTitle: "ألوان مائية و زيتي و أكريك"
    }
  ];

  const secondRowCategories = [
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Canvas Boards",
      arabicTitle: "اللوحة القماشية"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Educational Cards",
      arabicTitle: "بطاقات تعليمية"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1628621317388-6ebde0c18574?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Blackboard",
      arabicTitle: "صبورة"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Sports Notebooks",
      arabicTitle: "دفاتر سائد موريو"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "Record Books",
      arabicTitle: "سجلات حسابات"
    }
  ];

  const thirdRowCategories = [
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1631173716529-fd1696a807b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "File Organizers",
      arabicTitle: "فايل بوكس"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1510070009289-b5bc34383727?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "Rulers",
      arabicTitle: "مسطرة"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Electronic Cards",
      arabicTitle: "صبورة الكترونيه"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Mobile Holder",
      arabicTitle: "سبت الموايل"
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1628621317388-6ebde0c18574?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "School Bag",
      arabicTitle: "رحلة مدرسية"
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "Crayons",
      arabicTitle: "ناليون كيس"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* First Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            image={category.image}
            title={category.title}
            arabicTitle={category.arabicTitle}
            index={index}
          />
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {secondRowCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            image={category.image}
            title={category.title}
            arabicTitle={category.arabicTitle}
            index={index + 7}
          />
        ))}
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {thirdRowCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            image={category.image}
            title={category.title}
            arabicTitle={category.arabicTitle}
            index={index + 12}
          />
        ))}
      </div>
    </div>
  );
};

// Featured Categories Section with Enhanced Animations
export const FeaturedCategories = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredCategories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "قلم حبليط",
      price: "",
      badge: ""
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1631173716529-fd1696a807b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "قائمة منيو",
      price: "",
      badge: ""
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1510070009289-b5bc34383727?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzdGF0aW9uZXJ5fGVufDB8fHx8MTc1MzU1NDcwMHww&ixlib=rb-4.1.0&q=85",
      title: "حقيبة لابدي",
      price: "",
      badge: ""
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "حقيبة سفر 4 قطعة",
      price: "",
      badge: ""
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "حقيبة سفر",
      price: "",
      badge: "Super137.55"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1628621317388-6ebde0c18574?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjBzdXBwbGllc3xlbnwwfHx8fDE3NTM1NTQ2OTR8MA&ixlib=rb-4.1.0&q=85",
      title: "حقيب الرياضي",
      price: "A-135",
      badge: ""
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 animate-slide-in-right">الأقسام</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredCategories.map((category, index) => (
            <div 
              key={category.id} 
              data-index={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-700 transform ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              } hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square relative overflow-hidden group">
                {category.badge && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded z-10 animate-bounce">
                    {category.badge}
                  </div>
                )}
                {category.price && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded z-10 animate-pulse">
                    {category.price}
                  </div>
                )}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="bg-blue-900 text-white p-3 text-center transition-all duration-300 hover:bg-blue-800">
                <h3 className="font-semibold text-sm transition-transform duration-300 hover:scale-110">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};