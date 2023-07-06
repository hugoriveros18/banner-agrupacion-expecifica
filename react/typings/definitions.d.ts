type TipoBanner = 'Imagen' | 'Texto';

type Content = {
  tipoBanner: TipoBanner
  ImagenMinibanner?: string
  TextoMinibanner?: string
}

type TipoValidacion = 'Sku' | 'Coleccion'

type ProductPageMinibanner = {
  tituloBanner: string
  tipoValidacion: TipoValidacion
  skuId: string
  content: Content
  urlRedireccion: string
  condicionalFechas: CondicionalFechas
  estaActivo: boolean
}

type ProductPageMinibannerProps = {
  listaDeSku: ProductPageMinibanner[]
}

type AgrupacionesDeBusqueda = 'departamento' | 'categoria' | 'subcategoria' | 'marca' | 'coleccion'

type SearchResultBannerProps = {
  tituloBanner: string
  tipoAgrupacion: AgrupacionesDeBusqueda
  idAgrupacion: string
  imagenBannerDesktop: string
  imagenBannerMobile: string
  urlRedireccion: string
  programarEntreFechas: boolean
  fechaInicio: string
  fechaFinal: string
  estaActivo: boolean
}
