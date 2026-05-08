export interface Section {
  id: string;
  label: string;
}

export const sections: Section[] = [
  { id: 'hero', label: 'Fountain' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'features', label: 'In the world' },
  { id: 'system', label: 'The system' },
  { id: 'beauty', label: 'Why beauty' },
  { id: 'specs', label: 'Imagined spec' },
  { id: 'status', label: 'Status' },
];
