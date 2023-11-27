import React from 'react';
import styles from './Home.module.css';
import Products from '../Products/Products';
import MainSlider from '../MainSlider/MainSlider';
import CategorySlider from '../CategorySlider/CategorySlider';
import { Dropdown } from 'bootstrap/dist/js/bootstrap.bundle';
import { Link } from 'react-router-dom';

export default function Home() {
  return <>
   

  <MainSlider/>
  <CategorySlider/>
  <Products/>
  </>
}
