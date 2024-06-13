import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list', {
    duration: 400,
    showMultiple: false,
    elementClass: 'faq-list-item',
    triggerClass: 'faq-item-title',
    panelClass: 'faq-item-text',
    activeClass: 'faq-list-item-active',
    openOnInit: [0]
  });