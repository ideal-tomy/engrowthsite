import React from 'react';
import '../styles/components.css';

export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  icon,
  className = '',
  children,
}) => {
  return (
    <div className={`card ${className}`}>
      {imageUrl && (
        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>
      )}
      {icon && (
        <div className="card-icon">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default CardComponent;