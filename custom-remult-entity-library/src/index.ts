import { Entity, Fields, Remult } from "remult";

// Create a Remult entity for the Product
@Entity("products")
export class Product extends Remult {
  @Fields.string()
  name!: string;

  @Fields.number()
  price!: number;
}
