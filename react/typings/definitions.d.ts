type TipoBanner = 'Imagen' | 'Texto';

type Content = {
  tipoBanner: TipoBanner
  ImagenMinibanner?: string
  TextoMinibanner?: string
}

type ProductPageMinibanner = {
  tituloBanner: string
  skuId: string
  content: Content
  urlRedireccion: string
  condicionalFechas: CondicionalFechas
  estaActivo: boolean
}

type ProductPageMinibannerProps = {
  listaDeSku: ProductPageMinibanner[]
}

type AgrupacionesDeBusqueda = 'Departamento' | 'Categoria' | 'SubCategoria' | 'Marca' | 'Coleccion'

type ProgramarFechas = 'Si' | 'No'

type CondicionalFechas = {
  programarFechas: ProgramarFechas
  fechaInicio: string
  fechaFinal: string
}

type SearchResultBanner = {
  tituloBanner: string
  imagenBannerDesktop?: string
  imagenBannerTablet?: string
  imagenBannerCelular?: string
  urlRedireccion: string
  tipoAgrupacion: AgrupacionesDeBusqueda
  idAgrupacion: string
  condicionalFechas: CondicionalFechas
  estaActivo: boolean
}

type SearchResultBannerProps = {
  configuracionesBanner: SearchResultBanner[]
}
