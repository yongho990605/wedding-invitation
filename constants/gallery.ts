type ConceptKey =
  | 'CONCEPT_1'
  | 'CONCEPT_2'
  | 'CONCEPT_3'
  | 'CONCEPT_4'
  | 'CONCEPT_5'
  | 'CONCEPT_6'
  | 'CONCEPT_7'
  | 'CONCEPT_8'

const CONCEPT_IMAGE_COUNTS: Record<ConceptKey, number> = {
  CONCEPT_1: 9,
  CONCEPT_2: 4,
  CONCEPT_3: 4,
  CONCEPT_4: 6,
  CONCEPT_5: 9,
  CONCEPT_6: 7,
  CONCEPT_7: 11,
  CONCEPT_8: 6
}

export const GALLERY_IMAGES = Object.entries(CONCEPT_IMAGE_COUNTS).reduce(
  (acc, [concept, count]) => {
    acc[concept as ConceptKey] = Array.from(
      { length: count },
      (_, i) => `images/${concept.replace('_', '').toLowerCase()}/image${i + 1}.jpg`
    )
    return acc
  },
  {} as Record<ConceptKey, string[]>
)
