export class PokemonAPI {
  name!: string;
  sprites!: {
    front_default: string;
    back_default: string;
  };
  types!: [
    {
      type: {
        name: string;
      }
    }
  ];
  height!: number;
  weight!: number;
}
