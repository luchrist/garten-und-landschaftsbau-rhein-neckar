export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

// Kein Foto-Pool aus der Aquise verfügbar. Die Referenzen-Sektion blendet sich
// aus, sobald das Array leer ist. Sobald echte Projektbilder vorliegen, hier
// eintragen: afterImage aus /assets/acquisition/projekte/, beforeImage nur bei
// einer echten Vorher-Aufnahme desselben Projekts.
export const referenzen: Referenz[] = [];
