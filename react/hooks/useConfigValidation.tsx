import { useEffect, useState } from "react";
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext';


const useConfigValidation = (inputconfiguracionesBanner:SearchResultBanner[]) => {

  //SEARCH RESULT CONTEXT
  const searchPageContext = useSearchPage();

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
    if(inputconfiguracionesBanner) {
      setDepartamentosBusqueda([]);
      setCategoriasBusqueda([]);
      setSubcategoriasBusqueda([]);
      setSubcategorias4Busqueda([]);
      setMarcasBusqueda([]);
      setColeccionesBusqueda([]);
      searchPageContext.searchQuery.facets.specificationFilters.forEach((fil:any) => {
        const facetsId = fil.facets.map((facet:any) => facet.id);
        const facetsIdColeccion = fil.facets.map((facet:any) => facet.name);
        switch(fil.name) {
          case "Departamento":
            setDepartamentosBusqueda(facetsId);
            break;
          case "Categoría":
            setCategoriasBusqueda(facetsId);
            break;
          case "Sub-Categoría":
            setSubcategoriasBusqueda(facetsId);
            break;
          case "Category 4":
            setSubcategorias4Busqueda(facetsId);
            break;
          case "Marca":
            setMarcasBusqueda(facetsId);
            break;
          case "ProductClusterIds":
            setColeccionesBusqueda(facetsIdColeccion);
            break;
        }
      })
    }
  },[searchPageContext])

  useEffect(() => {
    setConfiguracionResultadoBusqueda(null);
    if(inputconfiguracionesBanner) {
      for (let config of inputconfiguracionesBanner) {
        const idConfig = config.idAgrupacion.split("-");
        if(config.tipoAgrupacion === 'departamento') {
          //Validacion departamentos
          if(departamentosBusqueda.length > 0) {
            for (let depId of departamentosBusqueda) {
              if(idConfig.includes(depId)) {
                setConfiguracionResultadoBusqueda(config);
                break;
              }
            }
          }
        } else if (config.tipoAgrupacion === 'categoria') {
          //Validacion categorias
          if(categoriasBusqueda.length > 0) {
            for (let categId of categoriasBusqueda) {
              if(idConfig.includes(categId)) {
                setConfiguracionResultadoBusqueda(config);
                break;
              }
            }
          }
        } else if (config.tipoAgrupacion === 'subcategoria') {
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
        } else if (config.tipoAgrupacion === 'marca') {
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
            for(let coleccion of coleccionesBusqueda) {
              if(idConfig.includes(coleccion)) {
                setConfiguracionResultadoBusqueda(config);
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
    coleccionesBusqueda,
    inputconfiguracionesBanner
  ])


  return {
    configuracionResultadoBusqueda
  }

}

export default useConfigValidation;
