export class Speaker {
  id: number;
  name: string;
  address: string;
  role: string;
  image: string;

  constructor(
    id: number,
    name: string,
    address: string,
    role: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.role = role;
    this.image = image;
  }
}
