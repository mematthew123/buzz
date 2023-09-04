// below is the interface for the strains page
export interface StrainsPageProps {
  strains: Strain[];
}

// below is the interface for the strain
export interface Strain {
  id: number;
  name: string;
  type: string;
  thc: number;
  cbd: number;
  image: string;
  description: string;

}

// below is the interface for the strain card
export interface StrainCardProps {
  strain: Strain;
}
