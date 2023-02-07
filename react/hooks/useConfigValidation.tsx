import { useEffect, useState } from "react";
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext';


const useConfigValidation = (inputconfiguracionesBanner:SearchResultBanner[]) => {

  //SEARCH RESULT CONTEXT
  const searchPageContext = useSearchPage();

  console.log(searchPageContext)
  console.log(inputconfiguracionesBanner)

  //2002029 - UBISOFT
  //2003117 - TROPI
  //0.5rem - PHONE
  //1rem - min-640px - padding-top: 0.5rem

  //ESTADOS
  const [departamentosBusqueda, setDepartamentosBusqueda] = useState<string[]>([]);
  const [categoriasBusqueda, setCategoriasBusqueda] = useState<string[]>([]);
  const [subcategoriasBusqueda, setSubcategoriasBusqueda] = useState<string[]>([]);
  const [subcategorias4Busqueda, setSubcategorias4Busqueda] = useState<string[]>([]);
  const [marcasBusqueda, setMarcasBusqueda] = useState<string[]>([]);
  const [coleccionesBusqueda, setColeccionesBusqueda] = useState<string[]>([]);
  const [configuracionResultadoBusqueda, setConfiguracionResultadoBusqueda] = useState<SearchResultBanner | null>(null);

  //EFECTOS
  useEffect(() => {
    setSubcategorias4Busqueda([]);
    searchPageContext.filters.forEach((fil:any) => {
      const facetsId = fil.facets.map((facet:any) => facet.id);
      switch(fil.key) {
        case "category-1":
          setDepartamentosBusqueda(facetsId);
          break;
        case "category-2":
          setCategoriasBusqueda(facetsId);
          break;
        case "category-3":
          setSubcategoriasBusqueda(facetsId);
          break;
        case "category-4":
          setSubcategorias4Busqueda(facetsId);
          break;
        case "brand":
          setMarcasBusqueda(facetsId);
          break;
      }
    })

    let colectionIdToAdd:string[] = [];

    searchPageContext.searchQuery.products.forEach((product:any) => {
      const productClustersId = product.productClusters.map((productCluster:any) => productCluster.id);
      colectionIdToAdd = [...colectionIdToAdd,...productClustersId]
    })
    setColeccionesBusqueda(Array.from(new Set(colectionIdToAdd)));
  },[searchPageContext])

  useEffect(() => {
    setConfiguracionResultadoBusqueda(null);
    if(inputconfiguracionesBanner) {
      for (let config of inputconfiguracionesBanner) {
        const idConfig = config.idAgrupacion.split("-");
        if(config.tipoAgrupacion === 'Departamento') {
          //Validacion departamentos
          if(departamentosBusqueda.length > 0) {
            for (let depId of departamentosBusqueda) {
              if(idConfig.includes(depId)) {
                setConfiguracionResultadoBusqueda(config);
                break;
              }
            }
          }
        } else if (config.tipoAgrupacion === 'Categoria') {
          //Validacion categorias
          if(categoriasBusqueda.length > 0) {
            for (let categId of categoriasBusqueda) {
              if(idConfig.includes(categId)) {
                setConfiguracionResultadoBusqueda(config);
                break;
              }
            }
          }
        } else if (config.tipoAgrupacion === 'SubCategoria') {
          //Validacion subcategorias
          if(subcategoriasBusqueda.length > 0) {
            for (let subcategId of subcategoriasBusqueda) {
              if(idConfig.includes(subcategId)) {
                setConfiguracionResultadoBusqueda(config);
                break;
              }
            }
          }
          if(subcategorias4Busqueda.length > 0) {
            for (let subcateg4Id of subcategorias4Busqueda) {
              if(idConfig.includes(subcateg4Id)) {
                setConfiguracionResultadoBusqueda(config);
                break;
              }
            }
          }
        } else if (config.tipoAgrupacion === 'Marca') {
          //Validacion marcas
          if(marcasBusqueda.length > 0) {
            for (let marcaId of marcasBusqueda) {
              if(idConfig.includes(marcaId)) {
                setConfiguracionResultadoBusqueda(config);
                break;
              }
            }
          }
        } else {
          //Validacion colecciones
          if(coleccionesBusqueda.length > 0) {
            for (let coleccionId of coleccionesBusqueda) {
              if(idConfig.includes(coleccionId)) {
                setConfiguracionResultadoBusqueda(config);
                break;
              }
            }
          }
        }
      }
    }
  },[
    departamentosBusqueda,
    categoriasBusqueda,
    subcategoriasBusqueda,
    subcategorias4Busqueda,
    marcasBusqueda,
    coleccionesBusqueda
  ])


  return {
    configuracionResultadoBusqueda
  }

}

export default useConfigValidation;
