export interface Section {
  id: string;
  label: string;
}

export const sections: Section[] = [
  { id: 'hero', label: 'Fountain' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'worn', label: 'Worn' },
  { id: 'cycling', label: 'In motion' },
  { id: 'avocado', label: 'In the aisle' },
  { id: 'door', label: 'At the door' },
  { id: 'desk', label: 'At the desk' },
  { id: 'system', label: 'The system' },
  { id: 'beauty', label: 'Why beauty' },
  { id: 'specs', label: 'Imagined spec' },
  { id: 'status', label: 'Status' },
];
