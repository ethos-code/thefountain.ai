import type { ImageMetadata } from 'astro';
import worn from '../assets/slides/01-worn.jpg';
import cycling from '../assets/slides/02-cycling.jpg';
import avocado from '../assets/slides/03-avocado.jpg';
import door from '../assets/slides/04-door.jpg';
import desk from '../assets/slides/05-desk.jpg';

export interface Scene {
  id: string;
  image: ImageMetadata;
  alt: string;
  label: string;
  body: string;
}

export const scenes: Scene[] = [
  {
    id: 'cycling',
    image: cycling,
    alt: 'First-person view from a bicycle on a wet, neon-lit Tokyo street, with a Fountain navigation arrow projected onto the handlebars.',
    label: 'In motion.',
    body: 'Navigation projected onto your handlebars. Your eyes stay on the road, where they belong.',
  },
  {
    id: 'avocado',
    image: avocado,
    alt: 'A hand holding an avocado in a supermarket aisle, with a Fountain freshness indicator projected onto the fruit itself.',
    label: 'In the aisle.',
    body: 'Freshness, ripeness, origin — on the thing itself. No app. No phone. Just the answer, in the moment you need it.',
  },
  {
    id: 'door',
    image: door,
    alt: 'A wood-paneled front door with a softly Fountain-projected doorbell button and a clock displaying 7:45 to the right.',
    label: 'At the door.',
    body: 'A doorbell on a door that doesn’t have one. The home you live in, augmented quietly.',
  },
  {
    id: 'worn',
    image: worn,
    alt: 'A small Fountain Pen on the lapel of a denim jacket against a dark backdrop.',
    label: 'On you.',
    body: 'A small presence on your lapel. It sees what you see, hears what you hear. After a day, you forget you’re wearing it.',
  },
  {
    id: 'desk',
    image: desk,
    alt: 'A wooden desk surface with a meeting summary, participant tiles, and a 3D building model projected onto it. The Fountain Stand sits to the right.',
    label: 'At the desk.',
    body: 'Your meeting, your model, your timer — on the surface in front of you, in the meeting you’re already in.',
  },
];
