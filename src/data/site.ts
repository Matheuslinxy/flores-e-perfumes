// Static content. Shapes mirror future database tables (categories, products, gallery)
// Este módulo contém os dados estáticos do catálogo do site.
import buques from "@/assets/buques.jpg";
import rosas from "@/assets/rosas.jpg";
import cestaCafe from "@/assets/cesta-cafe.jpg";
import cestaChocolate from "@/assets/cesta-chocolate.jpg";
import presentes from "@/assets/presentes.jpg";
import coroas from "@/assets/coroas.jpg";
import hero from "@/assets/hero.jpg";
import sobre from "@/assets/sobre.jpg";

export const company = {
  name: "Flores e Perfumes",
  fullName: "Flores e Perfumes Floricultura",
  whatsapp: "5562995676783",
  whatsappDisplay: "(62) 99567-6783",
  instagram: "floriculturafloreseperfumes",
  address: "Av. da Alvorada, Qd. 11A, Lote 09, Sala 01",
  district: "Conjunto Cruzeiro do Sul, Aparecida de Goiânia - GO",
  hours: [
    { days: "Segunda a Sexta", time: "08h às 18h" },
    { days: "Sábado", time: "08h às 14h" },
    { days: "Domingo", time: "Sob encomenda" },
  ],
};

export const whatsappLink = (msg = "Olá! Gostaria de fazer um pedido na Flores e Perfumes.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;
export const instagramLink = `https://instagram.com/${company.instagram}`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.address}, ${company.district}`,
)}`;

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  price?: string;
}

export const products: Product[] = [
  {
    id: "buques",
    name: "Buquês",
    description: "Composições delicadas com flores da estação, feitas à mão para cada ocasião.",
    image: buques,
    imageAlt: "Buquê de rosas e flores em tons de rosa e branco",
    price: "A partir de R$ 129",
  },
  {
    id: "rosas",
    name: "Rosas",
    description: "Rosas selecionadas em box, buquês clássicos ou arranjos exclusivos.",
    image: rosas,
    imageAlt: "Rosas vermelhas em uma caixa preta com laço dourado",
    price: "A partir de R$ 159",
  },
  {
    id: "cesta-cafe",
    name: "Cestas de Café",
    description: "Um amanhecer especial com pães, frutas, sucos e flores.",
    image: cestaCafe,
    imageAlt: "Cesta de café da manhã com pães, frutas, suco e flores",
    price: "A partir de R$ 189",
  },
  {
    id: "cesta-chocolate",
    name: "Cestas de Chocolate",
    description: "Chocolates finos e flores para adoçar qualquer momento.",
    image: cestaChocolate,
    imageAlt: "Cesta com chocolates, rosas cor-de-rosa e laço dourado",
    price: "A partir de R$ 169",
  },
  {
    id: "presentes",
    name: "Presentes",
    description: "Perfumes, orquídeas e mimos embalados com todo cuidado.",
    image: presentes,
    imageAlt: "Perfume, orquídea branca e presente embrulhado com laço verde",
  },
  {
    id: "coroas",
    name: "Coroas de Flores",
    description: "Homenagens respeitosas com entrega ágil e atendimento sensível.",
    image: coroas,
    imageAlt: "Coroa de flores brancas com rosas e folhagens",
  },
];

export const gallery = [
  { src: hero, alt: "Buquê de rosas brancas e peônias" },
  { src: rosas, alt: "Box de rosas vermelhas" },
  { src: sobre, alt: "Florista montando buquê" },
  { src: buques, alt: "Buquê em tons rosados" },
  { src: coroas, alt: "Coroa de flores brancas" },
  { src: cestaCafe, alt: "Cesta de café da manhã" },
  { src: presentes, alt: "Kit presente com orquídea" },
  { src: cestaChocolate, alt: "Cesta de chocolates com rosas" },
];

export const images = { hero, sobre };
