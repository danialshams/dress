'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { mount } from '../public/store.js';
export default function Interactions() {
  useEffect(() => { gsap.registerPlugin(ScrollTrigger); return mount({gsap, ScrollTrigger, Lenis}); }, []);
  return null;
}
