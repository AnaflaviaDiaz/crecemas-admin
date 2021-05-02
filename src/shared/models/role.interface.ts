export interface Role {
  id: number;
  name: string;
  host: string;
  permits?: number[];
}
