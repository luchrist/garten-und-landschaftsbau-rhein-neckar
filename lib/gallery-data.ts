export interface GalleryItem {
  src: string;
  alt: string;
}

// Kein Foto-Pool aus der Aquise verfügbar. Solange das Array unter fünf
// Einträgen bleibt, greift der Fallback in components/Galerie.tsx mit den
// Template-Motiven. Sobald echte Fotos vorliegen, hier fünf ausgewählte
// Aufnahmen aus /assets/acquisition/ eintragen, erstes Bild wird zur großen
// Hero-Kachel.
export const galleryItems: GalleryItem[] = [];
