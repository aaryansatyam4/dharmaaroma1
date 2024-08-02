import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import TechBox from '../Components/TechnicalInfo/TechnicalInfo';
import Construction from '../Components/Construction/Construction';
import Application from '../Components/Application/Application';
import Feat from '../Components/Features/Features';
import './CSS/product.css';

// Make sure to import Bootstrap CSS and JS in your main index.js or App.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('description');
  
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`} 
            id="description-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#description" 
            type="button" 
            role="tab" 
            aria-controls="description" 
            aria-selected={activeTab === 'description'}
            onClick={() => setActiveTab('description')}>
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'tech' ? 'active' : ''}`} 
            id="tech-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#tech" 
            type="button" 
            role="tab" 
            aria-controls="tech" 
            aria-selected={activeTab === 'tech'}
            onClick={() => setActiveTab('tech')}>
            Technical Info
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'construction' ? 'active' : ''}`} 
            id="construction-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#construction" 
            type="button" 
            role="tab" 
            aria-controls="construction" 
            aria-selected={activeTab === 'construction'}
            onClick={() => setActiveTab('construction')}>
            Construction
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'application' ? 'active' : ''}`} 
            id="application-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#application" 
            type="button" 
            role="tab" 
            aria-controls="application" 
            aria-selected={activeTab === 'application'}
            onClick={() => setActiveTab('application')}>
            Application
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeTab === 'features' ? 'active' : ''}`} 
            id="features-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#features" 
            type="button" 
            role="tab" 
            aria-controls="features" 
            aria-selected={activeTab === 'features'}
            onClick={() => setActiveTab('features')}>
            Features
          </button>
        </li>
      </ul>
      
      <div className="tab-content" id="myTabContent">
        <div className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`} id="description" role="tabpanel" aria-labelledby="description-tab">
          <DescriptionBox />
        </div>
        <div className={`tab-pane fade ${activeTab === 'tech' ? 'show active' : ''}`} id="tech" role="tabpanel" aria-labelledby="tech-tab">
          <TechBox />
        </div>
        <div className={`tab-pane fade ${activeTab === 'construction' ? 'show active' : ''}`} id="construction" role="tabpanel" aria-labelledby="construction-tab">
          <Construction />
        </div>
        <div className={`tab-pane fade ${activeTab === 'application' ? 'show active' : ''}`} id="application" role="tabpanel" aria-labelledby="application-tab">
          <Application />
        </div>
        <div className={`tab-pane fade ${activeTab === 'features' ? 'show active' : ''}`} id="features" role="tabpanel" aria-labelledby="features-tab">
          <Feat />
        </div>
      </div>
    </div>
  );
}

export default Product;
