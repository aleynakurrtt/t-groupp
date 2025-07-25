import React from 'react';
import { useTranslation } from 'react-i18next';
import '/src/sections/Navbar/NavRoot.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className=" rounded-md language-select"
    >
      <option className='option' value="tr">Türkçe</option>
      <option className='option' value="en">English</option>
      <option className='option' value="ar">عربي</option>
    </select>
  );
};

export default LanguageSelector;